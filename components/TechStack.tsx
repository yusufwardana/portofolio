"use client";

import { useRef, useState, type KeyboardEvent } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { tools, type Tool } from "@/data/portfolio";
import { switchContent } from "@/animations/variants";
import Reveal from "./Reveal";

function ToolIcon({ tool }: { tool: Tool }) {
  return <span className="tool-icon" aria-hidden="true">{tool.name.slice(0, 2).toUpperCase()}</span>;
}

export default function TechStack() {
  const [selected, setSelected] = useState(0);
  const buttons = useRef<(HTMLButtonElement | null)[]>([]);
  const reduced = useReducedMotion();
  const tool = tools[selected];
  function onKey(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let next = index;
    if (event.key === "ArrowRight" || event.key === "ArrowDown") next = (index + 1) % tools.length;
    else if (event.key === "ArrowLeft" || event.key === "ArrowUp") next = (index + tools.length - 1) % tools.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = tools.length - 1;
    else return;
    event.preventDefault(); setSelected(next); buttons.current[next]?.focus();
  }
  return <section id="stack" className="stack section-space container-wide" aria-labelledby="stack-title">
    <Reveal><div className="centered-heading"><p className="eyebrow">Working tools</p><h2 id="stack-title">The stack behind the work</h2><p>Technologies I use to turn product ideas, operational problems, and experiments into software.</p></div></Reveal>
    <Reveal className="stack-layout">
      <div className="tools-grid" role="tablist" aria-label="Technology and design tools">
        {tools.map((item, i) => <button key={item.name} ref={(node) => { buttons.current[i] = node; }} id={`tool-${i}`} role="tab" aria-selected={i === selected} aria-controls="tool-detail" tabIndex={i === selected ? 0 : -1} className={`tool-button${i === selected ? " is-selected" : ""}`} onClick={() => setSelected(i)} onKeyDown={(event) => onKey(event, i)}>
          <ToolIcon tool={item} /><span>{item.name}</span><small>{item.category}</small>
        </button>)}
      </div>
      <div className="tool-detail" id="tool-detail" role="tabpanel" aria-labelledby={`tool-${selected}`} tabIndex={0}>
        <AnimatePresence mode="wait" initial={false}>
          <motion.div key={tool.name} variants={switchContent} initial={reduced ? false : "hidden"} animate="visible" exit={reduced ? undefined : "exit"}>
            <div className="tool-detail-heading"><ToolIcon tool={tool} /><div><span className="eyebrow">{tool.category}</span><h3>{tool.name}</h3></div></div><p>{tool.description}</p>
          </motion.div>
        </AnimatePresence>
      </div>
    </Reveal>
  </section>;
}
