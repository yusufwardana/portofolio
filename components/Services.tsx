"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Plus } from "lucide-react";
import { services } from "@/data/portfolio";
import { ease } from "@/animations/variants";
import Reveal from "./Reveal";

export default function Services() {
  const [expanded, setExpanded] = useState<number | null>(0);
  const reduced = useReducedMotion();
  return <section id="experience" className="services section-space container-narrow" aria-labelledby="services-title">
    <Reveal><h2 id="services-title">What I Do</h2></Reveal>
    <Reveal><div className="services-list">
      {services.map((service, i) => <div className={`service${expanded === i ? " is-open" : ""}`} key={service.title}>
        <h3><button id={`service-button-${i}`} aria-expanded={expanded === i} aria-controls={`service-panel-${i}`} onClick={() => setExpanded(expanded === i ? null : i)}>
          <span className="service-number">{String(i + 1).padStart(2, "0")}</span><span className="service-title">{service.title}</span><span className="service-toggle"><Plus size={17} /></span>
        </button></h3>
        <div id={`service-panel-${i}`} role="region" aria-labelledby={`service-button-${i}`}>
          <AnimatePresence initial={false}>
            {expanded === i && <motion.div className="service-answer" initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: reduced ? 0 : 0.35, ease }}><p>{service.description}</p></motion.div>}
          </AnimatePresence>
        </div>
      </div>)}
    </div></Reveal>
  </section>;
}
