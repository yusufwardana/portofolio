import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/portfolio";

export default function ProjectCard({ project }: { project: Project }) {
  const content = <>
      <div className={`project-visual visual-${project.visual}`} aria-hidden="true"><span>{project.title.slice(0, 2).toUpperCase()}</span><i /></div>
      <div className="project-meta"><span>{project.category} <span aria-hidden="true">•</span> {project.year}</span><span className="project-status">{project.status}</span><span className="project-arrow"><ArrowUpRight size={17} /></span></div>
      <h3>{project.title}</h3><p>{project.description}</p>
      <dl className="project-details"><div><dt>Problem</dt><dd>{project.problem}</dd></div><div><dt>Role</dt><dd>{project.role}</dd></div></dl>
      <ul className="project-tags" aria-label="Project stack">{project.stack.map(tag => <li key={tag}>{tag}</li>)}</ul>
    </>;
  return <article className="project-card">
    {project.url ? <a href={project.url} target="_blank" rel="noreferrer noopener" aria-label={`Open ${project.title} (opens in a new tab)`}>{content}</a> : <div className="project-card-content">{content}</div>}
  </article>;
}
