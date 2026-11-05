import { Link } from "react-router-dom";
import profile from "../assets/abeem.jpg";
import { CLIENTS, PROFILE } from "../constants";

const META = [
  { k: "Status", v: PROFILE.status, live: true },
  { k: "Location", v: PROFILE.location },
  { k: "Primary Focus", v: PROFILE.focus },
];

const Hero = () => (
  <section id="top" className="section-y gutter border-b border-line">
    <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
      <div className="lg:col-span-8">
        <p className="label mb-8">{PROFILE.role}</p>
        <h1 className="max-w-3xl text-4xl font-bold leading-[1.05] tracking-tight text-ink sm:text-5xl lg:text-6xl">
          Architecting <span className="mark">full-stack web systems</span> with integrated <span className="mark">AI & language models</span>.
        </h1>
        <p className="mt-10 max-w-xl text-lg leading-relaxed text-muted">
          I'm {PROFILE.name}, a full stack developer building web systems end to end, from database architecture and backend APIs to client interfaces and applied NLP models. Most of my work centers on Laravel, Next.js, and text intelligence pipelines.
        </p>
        <div className="mt-12 flex flex-wrap gap-4 text-sm font-medium">
          <Link
            to="/#works"
            className="rounded-md bg-ink px-6 py-3 text-canvas transition-colors hover:bg-butter hover:text-ink"
          >
            View selected works
          </Link>
          <a
            href={PROFILE.resume}
            target="_blank"
            rel="noopener noreferrer"
            download
            className="rounded-md border border-line px-6 py-3 transition-colors hover:border-ink"
          >
            Download resume ↓
          </a>
        </div>
      </div>

      <aside className="self-start overflow-hidden rounded-md border border-line lg:col-span-4">
        <img
          src={profile}
          alt={PROFILE.name}
          className="aspect-[16/10] w-full border-b border-line object-cover object-top grayscale"
        />
        <dl className="divide-y divide-line">
          {META.map((m) => (
            <div key={m.k} className="p-6">
              <dt className="label">{m.k}</dt>
              <dd className="mt-2 flex items-center gap-2 text-sm font-medium text-ink">
                {m.live && (
                  <span className="rounded-md bg-butter px-1.5 py-0.5 font-mono text-[10px] uppercase tracking-wider">
                    Open
                  </span>
                )}
                {m.v}
              </dd>
            </div>
          ))}
        </dl>
      </aside>
    </div>

    <div className="mt-20 flex flex-wrap items-center gap-x-10 gap-y-3 border-t border-line pt-8">
      <span className="label text-ink">Worked with</span>
      {CLIENTS.map((c) => (
        <span key={c} className="label">
          {c}
        </span>
      ))}
    </div>
  </section>
);

export default Hero;
