import { Fragment } from "react";

/** Renders Notion rich_text with its inline annotations and links. */
const RichText = ({ items = [] }) =>
  items.map((t, i) => {
    const a = t.annotations || {};
    let node = t.plain_text;
    if (a.code)
      node = (
        <code className="rounded bg-line/60 px-1 py-0.5 font-mono text-[0.85em] text-ink">
          {node}
        </code>
      );
    if (a.bold) node = <strong className="font-semibold text-ink">{node}</strong>;
    if (a.italic) node = <em>{node}</em>;
    if (a.strikethrough) node = <s>{node}</s>;
    if (a.underline) node = <u>{node}</u>;
    if (t.href)
      node = (
        <a
          href={t.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-ink underline decoration-line underline-offset-4 hover:decoration-ink"
        >
          {node}
        </a>
      );
    return <Fragment key={i}>{node}</Fragment>;
  });

const plain = (items = []) => items.map((t) => t.plain_text).join("");

const imageUrl = (b) => b.image?.file?.url || b.image?.external?.url;

/** Headings that feed the sticky index on the case-study page. */
export const getOutline = (blocks) =>
  blocks
    .filter((b) => b.type === "heading_1" || b.type === "heading_2")
    .map((b) => ({ id: b.id, label: plain(b[b.type].rich_text) }))
    .filter((h) => h.label);

const Block = ({ b }) => {
  const rt = b[b.type]?.rich_text;
  switch (b.type) {
    case "paragraph":
      return rt?.length ? (
        <p className="leading-relaxed text-muted">
          <RichText items={rt} />
        </p>
      ) : null;
    case "heading_1":
      return (
        <h2 id={b.id} className="scroll-mt-24 pt-6 text-2xl font-bold tracking-tight text-ink md:text-3xl">
          <span className="mark">
            <RichText items={rt} />
          </span>
        </h2>
      );
    case "heading_2":
      return (
        <h2 id={b.id} className="scroll-mt-24 pt-4 text-2xl font-bold tracking-tight text-ink">
          <span className="mark">
            <RichText items={rt} />
          </span>
        </h2>
      );
    case "heading_3":
      return (
        <h3 id={b.id} className="scroll-mt-24 pt-2 text-lg font-bold tracking-tight text-ink">
          <RichText items={rt} />
        </h3>
      );
    case "quote":
      return (
        <blockquote className="border-l-2 border-ink pl-5 text-lg leading-relaxed text-ink">
          <RichText items={rt} />
        </blockquote>
      );
    case "callout":
      return (
        <div className="flex gap-4 rounded-md border border-line bg-butter/20 p-5 leading-relaxed text-ink">
          {b.callout.icon?.emoji && <span>{b.callout.icon.emoji}</span>}
          <p>
            <RichText items={rt} />
          </p>
        </div>
      );
    case "code":
      return (
        <figure>
          <pre className="overflow-x-auto rounded-md border border-line bg-white p-5 font-mono text-xs leading-relaxed text-ink">
            <code>{plain(rt)}</code>
          </pre>
          {b.code.language && (
            <figcaption className="label mt-2">{b.code.language}</figcaption>
          )}
        </figure>
      );
    case "divider":
      return <hr className="border-line" />;
    case "image": {
      const src = imageUrl(b);
      if (!src) return null;
      const caption = plain(b.image.caption);
      return (
        <figure>
          <div className="overflow-hidden rounded-md border border-line bg-white">
            <img src={src} alt={caption || "Case study visual"} loading="lazy" className="w-full" />
          </div>
          {caption && <figcaption className="label mt-3">{caption}</figcaption>}
        </figure>
      );
    }
    case "to_do":
      return (
        <p className="flex gap-3 leading-relaxed text-muted">
          <span className="font-mono text-xs">{b.to_do.checked ? "[x]" : "[ ]"}</span>
          <span>
            <RichText items={rt} />
          </span>
        </p>
      );
    default:
      return null; // unsupported block types are skipped, not crashed on
  }
};

const LIST = {
  bulleted_list_item: { tag: "ul", cls: "list-disc" },
  numbered_list_item: { tag: "ol", cls: "list-decimal" },
};

/** Consecutive list items become one <ul>/<ol>. */
const group = (blocks) => {
  const out = [];
  for (const b of blocks) {
    const prev = out[out.length - 1];
    if (LIST[b.type] && prev?.list === b.type) prev.items.push(b);
    else if (LIST[b.type]) out.push({ list: b.type, items: [b], key: b.id });
    else out.push({ block: b, key: b.id });
  }
  return out;
};

const NotionBlocks = ({ blocks }) => (
  <div className="space-y-6">
    {group(blocks).map((g) => {
      if (!g.list) return <Block key={g.key} b={g.block} />;
      const { tag: Tag, cls } = LIST[g.list];
      return (
        <Tag key={g.key} className={`${cls} space-y-2 pl-6 leading-relaxed text-muted marker:text-ink`}>
          {g.items.map((li) => (
            <li key={li.id}>
              <RichText items={li[li.type].rich_text} />
            </li>
          ))}
        </Tag>
      );
    })}
  </div>
);

export default NotionBlocks;
