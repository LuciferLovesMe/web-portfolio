// Dev only: lets `npm start` serve the same /api handlers that Vercel runs in
// production. CRA loads .env.local into process.env before this file runs.
const projects = require("../api/projects");
const projectDetail = require("../api/project-detail");

module.exports = (app) => {
  app.get("/api/projects", projects);
  app.get("/api/project-detail", projectDetail);
};
