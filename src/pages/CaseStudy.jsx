import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Tag } from "../components/SectionHeader";
import NotionBlocks, { getOutline } from "../components/NotionBlocks";
import { SourceNotice } from "../components/FeaturedProjects";
import { getCover, getCoverCaption, getGallery } from "../data/projects";
import { useProjectDetail } from "../data/useProjectDetail";

// Height of the main visual; gallery images size themselves (see section 5).
const COVER_HEIGHT = "h-72 sm:h-96 lg:h-[32rem]";

const MetaCell = ({ label, children }) => (
  <div className="p-6 sm:px-10">
    <dt className="label">{label}</dt>
    <dd className="mt-1.5 text-sm">{children}</dd>
  </div>
);

const Paragraphs = ({ items }) => (
  <div className="space-y-4 leading-relaxed text-muted">
    {items.map((t, i) => (
      <p key={i}>{t}</p>
    ))}
  </div>
);

const NotFound = () => (
  <div className="gutter py-32">
    <p className="label">404 // Project not found</p>
    <Link to="/#works" className="mt-6 inline-block text-sm underline underline-offset-4">
      ← Back to Selected Works
    </Link>
  </div>
);

const NavProject = ({ project, direction }) => (
  <Link
    to={`/work/${project.slug}`}
    className={`group block gutter py-10 transition-colors hover:bg-butter/20 ${
      direction === "next" ? "md:text-right" : ""
    }`}
  >
    <p className="label">
      {direction === "next" ? "Next Project →" : "← Previous Project"}
    </p>
    <p className="mt-2 text-xl font-bold tracking-tight text-ink">{project.title}</p>
  </Link>
);

const buildSections = (p) =>
  [
    p.fullOverview?.length && {
      id: "problem",
      label: "The Problem",
      body: <Paragraphs items={p.fullOverview} />,
    },
    p.architectureDetails?.length && {
      id: "architecture",
      label: "System Design & Architecture",
      body: <Paragraphs items={p.architectureDetails} />,
    },
    p.challenges?.length && {
      id: "challenges",
      label: "Technical Highlights & Challenges",
      body: (
        <div className="space-y-8">
          {p.challenges.map((h) => (
            <div key={h.title}>
              <h3 className="font-semibold">{h.title}</h3>
              <p className="mt-2 leading-relaxed text-muted">{h.body}</p>
            </div>
          ))}
        </div>
      ),
    },
    p.metrics?.length && {
      id: "impact",
      label: "Metrics & Impact",
      body: (
        <dl className="grid grid-cols-2 divide-x divide-line border border-line">
          {p.metrics.map((m) => (
            <div key={m.label} className="p-5">
              <dd className="text-2xl font-semibold">{m.value}</dd>
              <dt className="label mt-1">{m.label}</dt>
            </div>
          ))}
        </dl>
      ),
    },
  ].filter(Boolean);

const DetailSkeleton = () => (
  <div className="gutter animate-pulse space-y-6 py-24" aria-busy="true">
    <div className="h-4 w-40 rounded bg-line/60" />
    <div className="h-14 w-2/3 rounded bg-line/60" />
    <div className="h-5 w-1/2 rounded bg-line/60" />
    <div className="h-80 rounded-md bg-line/40" />
  </div>
);

const CaseStudy = () => {
  const { slug } = useParams();
  const detail = useProjectDetail(slug);
  const p = detail.project;

  useEffect(() => {
    document.title = p
      ? `${p.title} | Maulana Malik Ibrahim`
      : "Not found | Maulana Malik Ibrahim";
    return () => {
      document.title = "Portfolio | Maulana Malik Ibrahim";
    };
  }, [p]);

  if (detail.status === "loading") return <DetailSkeleton />;
  if (!p) return <NotFound />;

  const { prev, next, blocks, source } = detail;
  const outline = getOutline(blocks);
  const hasNotionBody = blocks.length > 0;
  const sections = hasNotionBody
    ? outline.map((h) => ({ id: h.id, label: h.label }))
    : buildSections(p);
  const gallery = getGallery(p);

  return (
    <article>
      {/* 1. header bar */}
      <div className="border-b border-line">
        <div className="gutter py-6">
          <Link to="/#works" className="text-sm transition-colors hover:underline">
            ← Back to Selected Works
          </Link>
        </div>
        <dl className="grid grid-cols-2 divide-x divide-line border-t border-line md:grid-cols-4">
          <MetaCell label="Role">{p.role}</MetaCell>
          <MetaCell label="Period">{p.period || p.year || "—"}</MetaCell>
          <MetaCell label="Stack">{p.stack.join(", ") || "—"}</MetaCell>
          <MetaCell label="Context">{p.client || p.context}</MetaCell>
        </dl>
      </div>

      {/* 2. hero */}
      <header className="border-b border-line gutter py-20">
        <h1 className="max-w-3xl text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
          {p.title}
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
          {p.headline}
        </p>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
          {p.summary}
        </p>
        {(p.liveUrl || p.githubUrl) && (
          <div className="mt-8 flex flex-wrap gap-3 text-sm">
            {p.liveUrl && (
              <a
                href={p.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md bg-ink px-5 py-2.5 text-canvas transition-colors hover:bg-butter hover:text-ink"
              >
                View Live Application ↗
              </a>
            )}
            {p.githubUrl && (
              <a
                href={p.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md border border-line px-5 py-2.5 transition-colors hover:border-ink"
              >
                Source Code ↗
              </a>
            )}
          </div>
        )}
      </header>

      {source === "local" && (
        <div className="gutter pt-8">
          <SourceNotice />
        </div>
      )}

      {/* 3. primary visual */}
      {getCover(p) && (
      <figure className="border-b border-line gutter py-12">
        <div className="flex items-center justify-center rounded-none border border-neutral-200 bg-neutral-100/40 p-4">
          <img
            src={getCover(p)}
            alt={`${p.title} main screen`}
            className={`${COVER_HEIGHT} w-full object-cover object-top`}
          />
        </div>
        <figcaption className="label mt-3">
          FIG.01 — {getCoverCaption(p) || p.title}
        </figcaption>
      </figure>
      )}

      {/* 4. deep dive: sticky index + content */}
      <div className="grid border-b border-line lg:grid-cols-12 lg:divide-x lg:divide-line">
        <aside className="gutter py-12 lg:col-span-4 lg:px-10">
          <nav className="lg:sticky lg:top-24">
            <p className="label mb-4">Index</p>
            {sections.length > 0 ? (
              <ol className="space-y-2 text-sm">
                {sections.map((s, i) => (
                  <li key={s.id}>
                    <a href={`#${s.id}`} className="text-muted transition-colors hover:text-ink">
                      <span className="mr-2 font-mono text-xs text-ink">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {s.label}
                    </a>
                  </li>
                ))}
              </ol>
            ) : (
              <ul className="flex flex-wrap gap-1.5">
                {p.stack.map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </ul>
            )}
          </nav>
        </aside>
        <div className="lg:col-span-8">
          {hasNotionBody ? (
            <div className="p-8 md:p-10">
              <NotionBlocks blocks={blocks} />
            </div>
          ) : sections.length > 0 ? (
            sections.map((s) => (
              <section
                key={s.id}
                id={s.id}
                className="scroll-mt-20 border-b border-line p-8 last:border-b-0 md:p-10"
              >
                <h2 className="mb-5 text-2xl font-bold tracking-tight text-ink">
                  <span className="mark">{s.label}</span>
                </h2>
                {s.body}
              </section>
            ))
          ) : (
            <div className="p-8 md:p-10">
              <p className="label">Write-up in progress</p>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-muted">
                The detailed case study for {p.title} (problem, architecture,
                challenges and impact) is being written. Add content to the
                page body in Notion and it appears here.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* 5. feature gallery */}
      {gallery.length > 0 && (
        <section className="border-b border-line gutter py-12">
          <h2 className="label mb-5">Feature Gallery</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
            {gallery.map((g) => (
              <figure key={g.src}>
                <div className="flex items-center justify-center rounded-none border border-neutral-200 bg-neutral-100/40 p-4">
                  <img src={g.src} alt={g.caption} loading="lazy" className="mx-auto max-h-[520px] w-auto max-w-full object-contain shadow-sm" />
                </div>
                <figcaption className="label mt-2">{g.caption}</figcaption>
              </figure>
            ))}
          </div>
        </section>
      )}

      {/* 6. pagination */}
      <nav className="grid border-b border-line md:grid-cols-2 md:divide-x md:divide-line">
        <NavProject project={prev} direction="prev" />
        <NavProject project={next} direction="next" />
      </nav>
    </article>
  );
};

export default CaseStudy;
