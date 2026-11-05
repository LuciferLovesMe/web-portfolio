const { fetchProjects, fetchBlocks, fail } = require("./_notion");

// GET /api/project-detail?slug=... -> { project, blocks, prev, next }
module.exports = async (req, res) => {
  const slug = String(req.query.slug || "").trim();
  if (!slug) return res.status(400).json({ error: "missing_slug" });

  try {
    const projects = await fetchProjects();
    const i = projects.findIndex((p) => p.slug === slug);
    if (i === -1) return res.status(404).json({ error: "not_found" });

    const project = projects[i];
    const blocks = await fetchBlocks(project.id);
    const n = projects.length;
    const brief = ({ slug, title }) => ({ slug, title });

    res.setHeader("Cache-Control", "s-maxage=300, stale-while-revalidate=300");
    res.status(200).json({
      project,
      blocks,
      prev: brief(projects[(i - 1 + n) % n]),
      next: brief(projects[(i + 1) % n]),
    });
  } catch (err) {
    fail(res, err);
  }
};
