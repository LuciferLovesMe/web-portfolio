/**
 * Section shell: mono index label, bold headline, full-width hairline,
 * then content. Shared by every home-page section for consistent rhythm.
 */
const Section = ({ id, index, label, title, aside, children }) => (
  <section id={id} className="section-y gutter border-b border-line">
    <header className="mb-12 flex items-end justify-between gap-6 border-b border-line pb-6 md:mb-16">
      <div>
        <p className="label">
          {index} {"//"} {label}
        </p>
        <h2 className="mt-2 text-2xl font-bold tracking-tight text-ink md:text-4xl">
          {title}
        </h2>
      </div>
      {aside && <span className="label hidden sm:block">{aside}</span>}
    </header>
    {children}
  </section>
);

export const Tag = ({ children }) => (
  <li className="rounded-md border border-line px-2 py-0.5 font-mono text-xs font-medium text-muted">
    {children}
  </li>
);

export default Section;
