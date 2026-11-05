import tukang from "../assets/projects/project-2.webp";
import aksara from "../assets/projects/project-4.webp";
import ketosin from "../assets/projects/ketosin.png";
import los from "../assets/projects/los.png";
import actgrow from "../assets/projects/actgrow.png";
import hcs from "../assets/projects/hcs.png";
import dimsa from "../assets/projects/dimsa.png";
import helpdesk from "../assets/projects/helpdesk.png";
import management from "../assets/projects/management.png";

/**
 * Single source of truth for the home page and the case-study pages.
 *
 * Case-study sections render only when their field is filled, so add real
 * content progressively:
 *   fullOverview         string[]            the problem and constraints
 *   architectureDetails  string[]            stack choices, schema, API design
 *   challenges           { title, body }[]   technical challenges + solutions
 *   metrics              { label, value }[]  measurable impact (real numbers only)
 *   images               { src, caption }[]  images[0] is the cover / dashboard
 *   liveUrl, githubUrl   string              action links
 *
 * `featured: true` projects fill the bento grid in array order
 * (8-col, 4-col, 6-col, 6-col). Every project appears in the archive table.
 */
export const PROJECTS = [
  {
    id: "01",
    slug: "human-capital-system",
    featured: true,
    year: "",
    title: "Human Capital System",
    type: "Web Application",
    context: "Enterprise Internal Platform",
    client: "Bank BPR UMKM Jawa Timur",
    role: "Full Stack Developer",
    period: "",
    headline:
      "Employee records and payroll, with the accounting logic built in.",
    summary:
      "Web app for managing employees and employee payroll, including accounting logic, at Bank BPR UMKM Jawa Timur.",
    architecture: "Monolith · Accounting ledger · Payroll engine",
    stack: ["Laravel", "Accounting", "AJAX", "MySQL"],
    fullOverview: [],
    architectureDetails: [],
    challenges: [],
    metrics: [],
    liveUrl: "",
    githubUrl: "",
    images: [{ src: hcs, caption: "Human Capital System — main dashboard" }],
  },
  {
    id: "02",
    slug: "pincetar",
    featured: true,
    year: "",
    title: "Pincetar",
    type: "Web Application",
    context: "Loan Management",
    client: "Bank BPR UMKM Jawa Timur",
    role: "Full Stack Developer",
    period: "",
    headline: "Customer loan management driven by dynamic forms.",
    summary:
      "Application for managing customer loans at Bank BPR UMKM Jawa Timur, built around dynamic forms.",
    architecture: "Dynamic form schema → Laravel API → MySQL",
    flow: ["Form schema", "Laravel", "MySQL"],
    stack: ["Laravel", "Dynamic Forms", "AJAX", "MySQL"],
    fullOverview: [],
    architectureDetails: [],
    challenges: [],
    metrics: [],
    liveUrl: "",
    githubUrl: "",
    images: [{ src: los, caption: "Pincetar — loan origination screen" }],
  },
  {
    id: "03",
    slug: "management-tools",
    featured: true,
    year: "2025",
    title: "Management Tools",
    type: "Internal Tool",
    context: "Internal Tool",
    client: "Inagata Technosmith",
    role: "Full Stack Developer (Intern)",
    period: "Aug 2025 – Dec 2025",
    headline: "A ClickUp-style workspace for running business processes.",
    summary:
      "A ClickUp-style management tool for handling various business processes at Inagata Technosmith.",
    architecture: "Vue front end · REST API · PostgreSQL",
    stack: ["Laravel", "REST API", "AJAX", "PostgreSQL", "VueJS"],
    fullOverview: [],
    architectureDetails: [],
    challenges: [],
    metrics: [],
    liveUrl: "",
    githubUrl: "",
    images: [{ src: management, caption: "Management Tools — workspace view" }],
  },
  {
    id: "04",
    slug: "ketosin",
    featured: true,
    year: "",
    title: "Ketosin",
    type: "Web + Mobile",
    context: "School Election Platform",
    client: "SMKN 1 Bondowoso",
    role: "Full Stack Developer",
    period: "",
    headline: "Running the student organization chairman election online.",
    summary:
      "A platform for running the intra-school student organization chairman election at SMKN 1 Bondowoso.",
    architecture: "Web + Android clients · shared REST API",
    stack: ["Laravel", "MySQL", "REST API", "Android"],
    fullOverview: [],
    architectureDetails: [],
    challenges: [],
    metrics: [],
    liveUrl: "",
    githubUrl: "",
    images: [{ src: ketosin, caption: "Ketosin — voting interface" }],
  },
  {
    id: "05",
    slug: "cms-dimsa",
    year: "",
    title: "CMS Dimsa",
    type: "CMS",
    context: "Content Management",
    client: "Yayasan Dimsa",
    role: "Full Stack Developer",
    period: "",
    headline: "A content management system for a foundation.",
    summary: "A Content Management System for Yayasan Dimsa.",
    stack: ["Laravel", "REST API", "AJAX", "MySQL", "AlpineJS"],
    images: [{ src: dimsa, caption: "CMS Dimsa — admin panel" }],
  },
  {
    id: "06",
    slug: "actgrow",
    year: "",
    title: "ActGrow",
    type: "Web Application",
    context: "Agriculture Platform",
    role: "Full Stack Developer",
    period: "",
    headline: "Connecting farmers with certification institutions.",
    summary:
      "An application for connecting farmers and certification institutions.",
    stack: ["Laravel", "AJAX", "MySQL"],
    images: [{ src: actgrow, caption: "ActGrow — main screen" }],
  },
  {
    id: "07",
    slug: "tukangindonesia",
    year: "2021",
    title: "TukangIndonesia",
    type: "Web Application",
    context: "Internship Project",
    client: "JV Partner Indonesia",
    role: "Backend Developer (Intern)",
    period: "Jan 2021 – Apr 2021",
    headline: "Booking a handyman online.",
    summary:
      "A web application for booking a handyman online, built during an internship at JV Partner Indonesia.",
    stack: ["Laravel", "AJAX", "MySQL"],
    images: [{ src: tukang, caption: "TukangIndonesia — booking flow" }],
  },
  {
    id: "08",
    slug: "helpdesk-edupongo",
    year: "",
    title: "Help Desk for Edupongo App",
    type: "Landing Page",
    context: "Support Site",
    role: "Frontend Developer",
    period: "",
    headline: "A landing page and help desk for the Edupongo app.",
    summary: "A landing page and help desk for the Edupongo app.",
    stack: ["Bootstrap", "HTML", "CSS", "JavaScript"],
    images: [{ src: helpdesk, caption: "Edupongo help desk — landing" }],
  },
  {
    id: "09",
    slug: "belajaraksara",
    year: "",
    title: "BelajarAksara",
    type: "Mobile App",
    context: "Education App",
    role: "Android Developer",
    period: "",
    headline: "Children learn Aksara Jawa (Javanese script) on Android.",
    summary:
      "An Android app for children to learn Aksara Jawa (Javanese script).",
    stack: ["Android", "SQLite"],
    images: [{ src: aksara, caption: "BelajarAksara — lesson screen" }],
  },
];

export const getProject = (slug) => PROJECTS.find((p) => p.slug === slug);
export const getFeatured = () => PROJECTS.filter((p) => p.featured);
// Notion rows carry `cover` + `gallery`; bundled data uses images[0] + the rest.
export const getCover = (p) => p.cover ?? p.images?.[0]?.src;
export const getGallery = (p) => p.gallery ?? (p.images || []).slice(1);
export const getCoverCaption = (p) => p.coverCaption ?? p.images?.[0]?.caption;

export const getAdjacent = (slug) => {
  const i = PROJECTS.findIndex((p) => p.slug === slug);
  return {
    prev: PROJECTS[(i - 1 + PROJECTS.length) % PROJECTS.length],
    next: PROJECTS[(i + 1) % PROJECTS.length],
  };
};
