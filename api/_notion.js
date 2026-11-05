// Shared Notion helpers for the serverless endpoints (underscore = not routed).
// Requires NOTION_API_KEY and NOTION_DATABASE_ID in the environment.
const { Client } = require("@notionhq/client");

class ConfigError extends Error {}

let client;
let dataSourceId;

const getClient = () => {
  if (!process.env.NOTION_API_KEY || !process.env.NOTION_DATABASE_ID) {
    throw new ConfigError(
      "NOTION_API_KEY / NOTION_DATABASE_ID are not set in the environment.",
    );
  }
  client ||= new Client({ auth: process.env.NOTION_API_KEY });
  return client;
};

/**
 * @notionhq/client v5 queries data sources, not databases. Resolve the first
 * data source of the database; if the configured ID is already a data source
 * ID, use it as is.
 */
const getDataSourceId = async (notion) => {
  if (dataSourceId) return dataSourceId;
  const id = process.env.NOTION_DATABASE_ID;
  try {
    const db = await notion.databases.retrieve({ database_id: id });
    dataSourceId = db.data_sources?.[0]?.id || id;
  } catch {
    dataSourceId = id;
  }
  return dataSourceId;
};

const text = (prop) =>
  (prop?.title || prop?.rich_text || []).map((t) => t.plain_text).join("").trim();

const files = (prop) =>
  (prop?.files || [])
    .map((f) => f.file?.url || f.external?.url)
    .filter(Boolean);

const YEAR = /\d{4}/g;
const ONGOING = /present|now|sekarang|saat ini/i;

/** Latest year mentioned in Period; ongoing ("Present") sorts first. */
const sortKey = (period) => {
  if (ONGOING.test(period)) return 9999;
  const years = (period.match(YEAR) || []).map(Number);
  return years.length ? Math.max(...years) : 0;
};

/** Notion page -> the shape the React components already consume. */
const toProject = (page) => {
  const p = page.properties;
  const period = text(p["Period"]);
  const cover = files(p["Cover"])[0];
  const gallery = files(p["Gallery"]);
  const context = text(p["Context"]);
  const summary = text(p["Summary"]);
  // Cover and Gallery stay separate: a project may have either, both, or none.
  const galleryItems = gallery.map((src, i) => ({
    src,
    caption: `Screen ${String(i + 1).padStart(2, "0")}`,
  }));

  return {
    id: page.id,
    slug: text(p["Slug"]),
    title: text(p["Name"]),
    summary,
    headline: summary,
    role: text(p["Role"]),
    period,
    year: (period.match(YEAR) || [])[0] || "",
    context,
    type: context,
    stack: (p["Tech Stack"]?.multi_select || []).map((o) => o.name),
    githubUrl: p["Github URL"]?.url || "",
    liveUrl: "",
    cover: cover || "",
    coverCaption: "Main interface",
    gallery: galleryItems,
    _sort: sortKey(period),
  };
};

const fetchProjects = async () => {
  const notion = getClient();
  const data_source_id = await getDataSourceId(notion);
  const results = [];
  let cursor;
  do {
    const res = await notion.dataSources.query({
      data_source_id,
      start_cursor: cursor,
      page_size: 100,
    });
    results.push(...res.results);
    cursor = res.has_more ? res.next_cursor : undefined;
  } while (cursor);

  return results
    .filter((r) => r.properties)
    .map(toProject)
    .filter((p) => p.slug && p.title)
    .sort((a, b) => b._sort - a._sort)
    .map(({ _sort, ...p }) => p);
};

/** All top-level blocks of a page, following pagination. */
const fetchBlocks = async (pageId) => {
  const notion = getClient();
  const blocks = [];
  let cursor;
  do {
    const res = await notion.blocks.children.list({
      block_id: pageId,
      start_cursor: cursor,
      page_size: 100,
    });
    blocks.push(...res.results);
    cursor = res.has_more ? res.next_cursor : undefined;
  } while (cursor);
  return blocks;
};

/** Shared error -> HTTP response mapping. */
const fail = (res, err) => {
  if (err instanceof ConfigError) {
    return res.status(503).json({ error: "not_configured", message: err.message });
  }
  console.error(err);
  return res
    .status(502)
    .json({ error: "notion_error", message: err.message || "Notion request failed" });
};

module.exports = { fetchProjects, fetchBlocks, fail };
