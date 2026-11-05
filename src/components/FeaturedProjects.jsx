import { Link } from "react-router-dom";
import Section, { Tag } from "./SectionHeader";
import { getCover } from "../data/projects";
import { useProjects } from "../data/ProjectsProvider";

// uniform image height for every bento card
const IMG_HEIGHT = "h-56 md:h-72";

// bento spans: 8 / 4 on the first row, 6 / 6 on the second
const SPANS = ["lg:col-span-8", "lg:col-span-4", "lg:col-span-6", "lg:col-span-6"];

/** Compact flow diagram built from `flow` steps, e.g. Form schema → Laravel → MySQL */
const Flow = ({ steps }) => (
  <ol className="mt-8 flex flex-wrap items-center gap-2 font-mono text-xs font-medium">
    {steps.map((s, i) => (
      <li key={s} className="flex items-center gap-2">
        <span className="rounded-md border border-line px-2 py-1">{s}</span>
        {i < steps.length - 1 && <span className="text-muted">→</span>}
      </li>
    ))}
  </ol>
);

const Card = ({ p, i }) => {
  const compact = i === 1 && Boolean(p.flow);
  const cover = getCover(p);
  return (
    <article
      className={`group flex flex-col overflow-hidden rounded-md border border-line ${SPANS[i]}`}
    >
      {!compact && cover && (
        <Link
          to={`/work/${p.slug}`}
          aria-label={`Case study: ${p.title}`}
          className="block overflow-hidden border-b border-line bg-white"
        >
          <img
            src={cover}
            alt={`${p.title} screenshot`}
            loading="lazy"
            className={`${IMG_HEIGHT} w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]`}
          />
        </Link>
      )}
      <div className="flex flex-1 flex-col p-8 md:p-10">
        <div className="flex flex-wrap items-center gap-3">
          <span className="rounded-md bg-butter px-2 py-0.5 font-mono text-[10px] font-medium uppercase tracking-wider text-ink">
            {p.type}
          </span>
          <span className="label">{p.client || p.context}</span>
        </div>
        <h3 className="mt-6 text-2xl font-bold tracking-tight text-ink">
          {p.title}
        </h3>
        <p className="mt-3 max-w-md leading-relaxed text-muted">{p.headline}</p>
        {p.architecture && (
          <p className="mt-6 font-mono text-xs font-medium text-ink">
            {p.architecture}
          </p>
        )}
        {compact && p.flow && <Flow steps={p.flow} />}
        <ul className="mt-8 flex flex-wrap gap-2">
          {p.stack.map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </ul>
        <Link
          to={`/work/${p.slug}`}
          className="mt-auto inline-block pt-10 text-sm font-semibold text-ink underline decoration-line underline-offset-4 transition-colors hover:decoration-ink"
        >
          Read case study →
        </Link>
      </div>
    </article>
  );
};

const Skeleton = () => (
  <div className="grid gap-8 md:gap-12 lg:grid-cols-12" aria-busy="true">
    {SPANS.map((span) => (
      <div
        key={span}
        className={`h-80 animate-pulse rounded-md border border-line bg-line/40 ${span}`}
      />
    ))}
  </div>
);

export const SourceNotice = () => (
  <p className="label mb-8 rounded-md border border-dashed border-line px-4 py-3 normal-case">
    Showing bundled sample data: the Notion connection is not available.
  </p>
);

const FeaturedProjects = () => {
  const { status, featured } = useProjects();
  return (
    <Section
      id="works"
      index="01"
      label="Selected Works"
      title="Selected Systems & Projects"
    >
      {status === "loading" && <Skeleton />}
      {status === "local" && <SourceNotice />}
      {status !== "loading" && (
        <div className="grid gap-8 md:gap-12 lg:grid-cols-12">
          {featured.map((p, i) => (
            <Card key={p.slug} p={p} i={i} />
          ))}
        </div>
      )}
    </Section>
  );
};

export default FeaturedProjects;
