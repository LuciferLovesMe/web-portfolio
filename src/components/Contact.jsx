import Section from "./SectionHeader";
import { PROFILE } from "../constants";

const LINKS = [
  { label: "GitHub", href: PROFILE.github },
  { label: "LinkedIn", href: PROFILE.linkedin },
  { label: "Instagram", href: PROFILE.instagram },
];

const Contact = () => (
  <Section id="contact" index="05" label="Contact" title="Get in touch">
    <p className="max-w-lg text-lg leading-relaxed text-muted">
      Open to full time work and freelance work. Email is the
      fastest way to reach me.
    </p>
    <a
      href={`mailto:${PROFILE.email}`}
      className="mark mt-8 inline-block break-all text-2xl font-bold tracking-tight text-ink sm:text-4xl"
    >
      {PROFILE.email}
    </a>
    <ul className="mt-14 flex flex-wrap gap-x-10 gap-y-3">
      {LINKS.map((l) => (
        <li key={l.label}>
          <a
            href={l.href}
            target="_blank"
            rel="noopener noreferrer"
            className="label transition-colors hover:text-ink"
          >
            {l.label} ↗
          </a>
        </li>
      ))}
    </ul>
  </Section>
);

export default Contact;
