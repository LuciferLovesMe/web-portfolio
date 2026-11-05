import { STACK_GROUPS } from "../constants";

// Asymmetric editorial split: sticky intro (4 cols) + stacked domain rows (8 cols)
const TechStack = () => (
  <section id="architecture" className="section-y gutter border-b border-line">
    <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
      <div className="lg:col-span-4">
        <div className="lg:sticky lg:top-24">
          <p className="label">03 {"//"} Capabilities & Stack</p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-ink md:text-4xl">
            Engineering Domains &amp;{" "}
            <span className="mark">Technical Toolset</span>.
          </h2>
          <p className="mt-6 max-w-sm leading-relaxed text-muted">
            I build backends that hold up under real use, verify them with
            systematic testing, and wire them into clean frontends. Alongside
            that, I work on NLP pipelines that turn raw text into structured
            data.
          </p>
        </div>
      </div>

      <ol className="divide-y divide-line border-y border-line lg:col-span-8">
        {STACK_GROUPS.map((g, i) => (
          <li key={g.label} className="py-10">
            <div className="flex items-baseline gap-4">
              <span className="label">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="text-2xl font-bold tracking-tight text-ink">
                {g.label}
              </h3>
            </div>
            <p className="mt-4 max-w-xl leading-relaxed text-muted sm:pl-9">
              {g.blurb}
            </p>
            <ul className="mt-6 flex flex-wrap gap-2 sm:pl-9">
              {g.items.map((item) => (
                <li
                  key={item}
                  className="rounded-md border border-line px-2 py-0.5 font-mono text-xs font-medium text-ink"
                >
                  {item}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </div>
  </section>
);

export default TechStack;
