import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { PROJECTS } from "./projects";

/**
 * Loads projects from the Notion-backed /api/projects endpoint once per visit.
 * If the API is unreachable or Notion is not configured (missing env, plain
 * `npm start` without serverless functions), it falls back to the local data in
 * ./projects.js so the site never renders empty.
 *
 * status: "loading" | "notion" | "local"
 */
const ProjectsContext = createContext(null);

const FEATURED_COUNT = 4;

export const fetchJson = async (url, signal) => {
  const res = await fetch(url, { signal });
  const type = res.headers.get("content-type") || "";
  if (!res.ok || !type.includes("application/json")) {
    const err = new Error(`Request failed (${res.status})`);
    err.status = res.status;
    throw err;
  }
  return res.json();
};

export const ProjectsProvider = ({ children }) => {
  const [state, setState] = useState({ status: "loading", projects: [] });

  useEffect(() => {
    const ctrl = new AbortController();
    fetchJson("/api/projects", ctrl.signal)
      .then((data) => {
        if (!data.projects?.length) throw new Error("empty");
        setState({ status: "notion", projects: data.projects });
      })
      .catch((err) => {
        if (err.name === "AbortError") return;
        setState({ status: "local", projects: PROJECTS });
      });
    return () => ctrl.abort();
  }, []);

  const value = useMemo(() => {
    const { status, projects } = state;
    // Notion rows arrive newest-Period first, so the top items are featured.
    const featured =
      status === "notion"
        ? projects.slice(0, FEATURED_COUNT)
        : projects.filter((p) => p.featured).slice(0, FEATURED_COUNT);
    return { status, projects, featured };
  }, [state]);

  return (
    <ProjectsContext.Provider value={value}>{children}</ProjectsContext.Provider>
  );
};

export const useProjects = () => {
  const ctx = useContext(ProjectsContext);
  if (!ctx) throw new Error("useProjects must be used inside ProjectsProvider");
  return ctx;
};
