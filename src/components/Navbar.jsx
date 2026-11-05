import { Link } from "react-router-dom";
import { PROFILE } from "../constants";

const LINKS = [
  { to: "/#works", label: "Works" },
  { to: "/#architecture", label: "Architecture" },
  { to: "/#experience", label: "Experience" },
  { to: "/#contact", label: "Contact" },
];

const Navbar = () => (
  <header className="sticky top-0 z-50 border-b border-line bg-canvas/90 backdrop-blur">
    <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 border-x border-line gutter">
      <Link to="/" className="text-sm font-bold tracking-tight text-ink">
        {PROFILE.name}
      </Link>
      <ul className="hidden items-center gap-8 text-sm font-medium text-muted md:flex">
        {LINKS.map((l) => (
          <li key={l.to}>
            <Link to={l.to} className="transition-colors hover:text-ink">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
      <div className="flex items-center gap-2">
        <a
          href={PROFILE.resume}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden rounded-md border border-line px-3 py-1.5 text-sm transition-colors hover:border-ink sm:block"
        >
          Resume
        </a>
        <Link
          to="/#contact"
          className="rounded-md bg-ink px-3 py-1.5 text-sm text-canvas transition-colors hover:bg-butter hover:text-ink"
        >
          Get in Touch
        </Link>
      </div>
    </nav>
  </header>
);

export default Navbar;
