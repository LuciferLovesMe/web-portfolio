import { useEffect, useState } from "react";
import { fetchJson } from "./ProjectsProvider";
import { PROJECTS, getAdjacent, getProject } from "./projects";

/**
 * Case-study data for one slug.
 * status: "loading" | "ready" | "notfound"
 * source: "notion" | "local"  (local = Notion unavailable, static data used)
 * blocks: raw Notion blocks (empty for local data)
 */
export const useProjectDetail = (slug) => {
  const [state, setState] = useState({ status: "loading" });

  useEffect(() => {
    const ctrl = new AbortController();
    setState({ status: "loading" });

    fetchJson(`/api/project-detail?slug=${encodeURIComponent(slug)}`, ctrl.signal)
      .then((d) =>
        setState({
          status: "ready",
          source: "notion",
          project: d.project,
          blocks: d.blocks || [],
          prev: d.prev,
          next: d.next,
        }),
      )
      .catch((err) => {
        if (err.name === "AbortError") return;
        // The API answered and has no such project: a genuine 404.
        if (err.status === 404 && PROJECTS.every((p) => p.slug !== slug)) {
          return setState({ status: "notfound" });
        }
        const local = getProject(slug);
        if (!local) return setState({ status: "notfound" });
        setState({
          status: "ready",
          source: "local",
          project: local,
          blocks: [],
          ...getAdjacent(slug),
        });
      });

    return () => ctrl.abort();
  }, [slug]);

  return state;
};
