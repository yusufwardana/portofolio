import { projects } from "@/data/portfolio";
import ProjectCard from "./ProjectCard";
import Reveal from "./Reveal";

export default function Projects() {
  return <section id="projects" className="projects section-space container-wide" aria-labelledby="projects-title">
    <Reveal className="projects-heading"><div><p className="eyebrow">Selected work</p><h2 id="projects-title">Systems in progress</h2></div><p>A set of product directions, prototypes, and experiments. Some are still being built; they are included to show the questions behind the work.</p></Reveal>
    <div className="projects-grid">{projects.map(project => <Reveal key={project.slug}><ProjectCard project={project} /></Reveal>)}</div>
  </section>;
}
