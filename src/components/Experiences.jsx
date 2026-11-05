import Section, { Tag } from "./SectionHeader";
import { EXPERIENCES } from "../constants";

const Experiences = () => (
  <Section id="experience" index="04" label="Work History" title="Experience">
    <div className="divide-y divide-line overflow-hidden rounded-md border border-line">
      {EXPERIENCES.map((e) => (
        <div
          key={`${e.company}-${e.period}`}
          className="grid md:grid-cols-[18rem_1fr] md:divide-x md:divide-line"
        >
          <div className="p-8 md:p-10">
            <p className="label text-ink">{e.period}</p>
            <p className="label mt-3 normal-case">{e.company}</p>
          </div>
          <div className="p-8 md:p-10">
            <h3 className="text-xl font-bold tracking-tight text-ink">
              {e.role}
            </h3>
            <ul className="mt-4 space-y-3 leading-relaxed text-muted">
              {e.points.map((pt) => (
                <li key={pt} className="flex gap-3">
                  <span>–</span>
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
            <ul className="mt-8 flex flex-wrap gap-2">
              {e.technologies.map((t) => (
                <Tag key={t}>{t}</Tag>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  </Section>
);

export default Experiences;
