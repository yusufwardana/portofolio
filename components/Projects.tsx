import { projects } from "@/data/portfolio";
import ProjectCard from "./ProjectCard";
import Reveal from "./Reveal";

export default function Projects() {
  return <section id="projects" className="projects section-space container-wide" aria-labelledby="projects-title">
    <Reveal className="projects-heading"><h2 id="projects-title">Selected Projects</h2><p>A few things I have designed and built recently. Each one blends strong systems with a distinct point of view.</p></Reveal>
    <div className="projects-grid">{projects.map(project => <Reveal key={project.name}><ProjectCard project={project} /></Reveal>)}</div>
  </section>;
}
