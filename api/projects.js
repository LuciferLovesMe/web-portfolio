const { fetchProjects, fail } = require("./_notion");

// GET /api/projects -> { projects: [...] }, newest Period first
module.exports = async (req, res) => {
  try {
    const projects = await fetchProjects();
    // Notion file URLs expire after ~1h, so keep the edge cache short.
    res.setHeader("Cache-Control", "s-maxage=60, stale-while-revalidate=60");
    res.status(200).json({ projects });
  } catch (err) {
    fail(res, err);
  }
};
