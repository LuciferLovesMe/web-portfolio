import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import project1 from "../src/assets/projects/project-1.webp";
import project2 from "../src/assets/projects/project-2.webp";
import project3 from "../src/assets/projects/project-3.webp";
import project4 from "../src/assets/projects/project-4.webp";
import ketosin from "../src/assets/projects/ketosin.png";
import los from "../src/assets/projects/los.png";
import actgrow from "../src/assets/projects/actgrow.png";
import hcs from "../src/assets/projects/hcs.png";
import dimsa from "../src/assets/projects/dimsa.png";
import helpdesk from "../src/assets/projects/helpdesk.png";
import management from "../src/assets/projects/management.png";

export const HERO_CONTENT = `I am an undergraduate student at State Polytechnic of Jember with a strong passion for software development. I specialize in web development using Next.js, Laravel, ASP.NET, and Express.js, and I am also interested in Android and desktop application development. I enjoy exploring new technologies and continuously improving my skills in these areas.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and many Others. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "May 2022 - Present",
    role: "Full Stack Developer",
    company: "Freelance",
    description: `Designed and developed web, desktop, and android applications using Next.js, Laravel, C#, VB.Net, etc. Worked closely with frontend developers to integrate backend components.`,
    technologies: [
      "Laravel",
      "Next.js",
      "mySQL",
      "PostgreSQL",
      "Android",
      "C#.Net",
      "ASP.Net",
      "Vue.js",
      "python",
      "Express.js",
    ],
  },
  {
    year: "Aug 2025 - Dec 2025",
    role: "Intern",
    company: "PT. Ina Gata Persada (Inagata Technosmith)",
    description: `Designed and developed web applications using Laravel, PostgreSQL, VueJS.`,
    technologies: [
      "HTML",
      "CSS",
      "Vue.js",
      "mySQL",
      "PostgreSQL",
      "TailwindCSS",
    ],
  },
  {
    year: "Feb 2025 - Jul 2025",
    role: "Intern",
    company: "Dicoding",
    description: `Joined as a AI Engineer Bootcamp participant at Coding Camp powered by DBS Foundation and Dicoding.`,
    technologies: [
      "Python",
      "Machine Learning",
      "Data Science",
      "AI",
      "Deep Learning",
    ],
  },
  {
    year: "Aug 2024 - Dec 2024",
    role: "Intern",
    company: "BRIN & Datains",
    description: `Designed and developed web applications using Next.js.`,
    technologies: ["HTML", "CSS", "Next.js", "mySQL", "PostgreSQL"],
  },
  {
    year: "Oct 2022 - Apr 2024",
    role: "Backend Developer",
    company: "PT. Barouk Raya Teknologi",
    description: `Helped company for developing web application using Laravel and MySQL. Also worked closely to frontend engineer and mobile developer to create a fully functional app`,
    technologies: ["Javascript", "AJAX", "Laravel", "REST API"],
  },
  {
    year: "Jan 2021 - Apr 2021",
    role: "Intern Backend Developer",
    company: "JV. Partner Indonesia",
    description: `Developed and maintained web applications using Laravel. Helped company for developing their apps called TukangIndonesia.`,
    technologies: ["PHP", "Laravel", "Ajax", "mySQL"],
  },
];

export const PROJECTS = [
  {
    title: "CMS Dimsa",
    image: dimsa,
    description: "A Content Management System for Yayasan Dimsa.",
    technologies: ["Laravel", "REST API", "AJAX", "MySQL", "AlpineJS"],
  },
  {
    title: "Help Desk for Edupongo App",
    image: helpdesk,
    description: "A Landing Page for helpdesk Edupongo App.",
    technologies: ["Bootstrap", "HTML", "CSS", "JavaScript"],
  },
  {
    title: "Management Tools",
    image: management,
    description:
      "A Management Tools application look alike Clickup for managing various business processes at Inagata Technosmith.",
    technologies: ["Laravel", "REST API", "AJAX", "PostgreSQL", "VueJS"],
  },
  {
    title: "Human Capital System",
    image: hcs,
    description:
      "A fully functional web app for managing employees and also managing employee's payroll at Bank BPR UMKM Jawa Timur.",
    technologies: ["Laravel", "Accounting", "AJAX", "MySQL"],
  },
  {
    title: "Pincetar",
    image: los,
    description:
      "An application for managing customer's loans at Bank BPR UMKM Jawa Timur.",
    technologies: ["Laravel", "Dynamic Forms", "AJAX", "MySQL"],
  },
  {
    title: "Ketosin",
    image: ketosin,
    description:
      "A platform that aims for chairman of intra-school student organization election at SMKN 1 Bondowoso.",
    technologies: ["Laravel", "MySQL", "REST API", "Android", "Mobile"],
  },
  {
    title: "BelajarAksara",
    image: project4,
    description:
      "A platform aimed at learning Aksara Jawa (Javanese Script) for children.",
    technologies: ["Android", "SqLite", "Mobile"],
  },
  {
    title: "ActGrow",
    image: actgrow,
    description:
      "An application for connecting farmers and certification institutions.",
    technologies: ["Laravel", "AJAX", "MySQL"],
  },
  {
    title: "TukangIndonesia",
    image: project2,
    description:
      "A web application for booking a handyman onlinely at JV Partner Indonesia.",
    technologies: ["Laravel", "AJAX", "MySQL"],
  },
];

export const CONTACT = {
  address:
    "Perum Pancoran Mas Blok F-01 Pancoran Village, Bondowoso Subdistrict, Kab. Bondowoso City, East Java.",
  phoneNo: "+62 8231 4363 3368 ",
  email: "mmalikibrahim666@gmail.com",
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
