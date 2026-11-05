import Contact from "../components/Contact";
import Experiences from "../components/Experiences";
import FeaturedProjects from "../components/FeaturedProjects";
import Hero from "../components/Hero";
import ProjectArchive from "../components/ProjectArchive";
import TechStack from "../components/TechStack";

const Home = () => (
  <>
    <Hero />
    <FeaturedProjects />
    <ProjectArchive />
    <TechStack />
    <Experiences />
    <Contact />
  </>
);

export default Home;
