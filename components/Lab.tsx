import { labEntries } from "@/data/portfolio";
import Reveal from "./Reveal";

export default function Lab() {
  return <section id="lab" className="lab section-space container-wide" aria-labelledby="lab-title">
    <Reveal className="lab-heading"><div><p className="eyebrow">Side channel</p><h2 id="lab-title">Lab / Experiments</h2></div><p>A space for unfinished ideas, technical notes, and prototypes that are useful before they are polished.</p></Reveal>
    <div className="lab-grid">{labEntries.map((entry, index) => <Reveal key={entry.title}><article className="lab-card"><span className="lab-index">0{index + 1}</span><div className="lab-card-meta"><span>{entry.type}</span><span>{entry.status}</span></div><h3>{entry.title}</h3><p>{entry.description}</p></article></Reveal>)}</div>
  </section>;
}