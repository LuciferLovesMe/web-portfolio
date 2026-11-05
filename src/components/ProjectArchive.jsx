import { Link } from "react-router-dom";
import Section from "./SectionHeader";
import { useProjects } from "../data/ProjectsProvider";

const COLS = "md:grid-cols-[4rem_1.4fr_1fr_1.8fr_5rem]";

const ProjectArchive = () => {
  const { status, projects: PROJECTS } = useProjects();
  return (
  <Section
    id="archive"
    index="02"
    label="Project Archive"
    title="Complete Project Index"
    aside={status === "loading" ? "Loading…" : `${PROJECTS.length} entries`}
  >
    <div
      className={`label hidden gap-6 border-b border-line pb-4 md:grid ${COLS}`}
    >
      <span>Year</span>
      <span>Project</span>
      <span>Company</span>
      <span>Tech Stack</span>
      <span className="text-right">View</span>
    </div>
    {status === "loading" && (
      <div className="space-y-3" aria-busy="true">
        {[0, 1, 2, 3].map((n) => (
          <div key={n} className="h-12 animate-pulse rounded-md bg-line/40" />
        ))}
      </div>
    )}
    <ul>
      {PROJECTS.map((p) => (
        <li key={p.slug} className="border-b border-line">
          <Link
            to={`/work/${p.slug}`}
            className={`group grid gap-1 py-6 transition-colors hover:bg-butter/20 md:items-baseline md:gap-6 ${COLS}`}
          >
            <span className="label">{p.year || "—"}</span>
            <span className="font-semibold text-ink">{p.title}</span>
            <span className="text-sm text-muted">{p.type}</span>
            <span className="label normal-case">
              {p.stack.slice(0, 3).join(" · ")}
            </span>
            <span className="label transition-colors group-hover:text-ink md:text-right">
              Detail →
            </span>
          </Link>
        </li>
      ))}
    </ul>
  </Section>
  );
};

export default ProjectArchive;
