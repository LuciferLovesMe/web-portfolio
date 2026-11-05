import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import ScrollManager from "./components/ScrollManager";
import CaseStudy from "./pages/CaseStudy";
import Home from "./pages/Home";
import { ProjectsProvider } from "./data/ProjectsProvider";

const App = () => (
  <BrowserRouter>
   <ProjectsProvider>
    <ScrollManager />
    <div className="min-h-screen bg-canvas text-ink antialiased">
      <Navbar />
      {/* architectural guide lines: the page lives between two hairlines */}
      <main className="mx-auto max-w-7xl border-x border-line bg-canvas">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work/:slug" element={<CaseStudy />} />
          <Route path="*" element={<CaseStudy />} />
        </Routes>
      </main>
      <footer className="border-t border-line">
        <div className="gutter mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-2 border-x border-line py-10 label">
          <span>© {new Date().getFullYear()} Maulana Malik Ibrahim</span>
          {/* <span>Built with React + Tailwind</span> */}
        </div>
      </footer>
    </div>
   </ProjectsProvider>
  </BrowserRouter>
);

export default App;
