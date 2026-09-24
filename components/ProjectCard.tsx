import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/portfolio";

export default function ProjectCard({ project }: { project: Project }) {
  return <article className="project-card">
    <a href={project.href} target="_blank" rel="noreferrer noopener" aria-label={`Visit ${project.name} website (opens in a new tab)`}>
      <div className="project-image"><Image src={`/images/${project.image}.webp`} alt={`${project.name} website preview`} width={640} height={400} sizes="(max-width: 767px) calc(100vw - 80px), (max-width: 1152px) calc(50vw - 100px), 476px" /></div>
      <div className="project-meta"><span>{project.category} <span aria-hidden="true">•</span> {project.year}</span><span className="project-arrow"><ArrowUpRight size={17} /></span></div>
      <h3>{project.name}</h3><p>{project.description}</p>
      <ul className="project-tags" aria-label="Project tags">{project.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
    </a>
  </article>;
}
