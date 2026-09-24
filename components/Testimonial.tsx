"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { testimonials } from "@/data/portfolio";
import { switchContent } from "@/animations/variants";
import Reveal from "./Reveal";

export default function Testimonial() {
  const [index, setIndex] = useState(0);
  const reduced = useReducedMotion();
  const item = testimonials[index];
  const change = (step: number) => setIndex((current) => (current + step + testimonials.length) % testimonials.length);
  return <section className="testimonials section-space container-narrow" aria-labelledby="testimonial-title">
    <Reveal><h2 id="testimonial-title">Kind words from clients</h2></Reveal>
    <Reveal>
      <div className="testimonial-card" aria-roledescription="carousel" aria-label="Client testimonials">
        <Quote className="quote-mark" size={40} fill="currentColor" strokeWidth={0} aria-hidden="true" />
        <div className="testimonial-content" aria-live="polite" aria-atomic="true">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div key={index} variants={switchContent} initial={reduced ? false : "hidden"} animate="visible" exit={reduced ? undefined : "exit"}>
              <blockquote>{item.quote}</blockquote>
              <div className="testimonial-person"><span className="person-avatar" style={{ background: item.color }} aria-hidden="true">{item.name.charAt(0)}</span><div><h3>{item.name}</h3><p>{item.role}</p></div></div>
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="testimonial-controls">
          <div className="carousel-dots">{testimonials.map((quote, i) => <button key={quote.name} aria-label={`Go to testimonial ${i + 1}`} aria-pressed={index === i} onClick={() => setIndex(i)}><span /></button>)}</div>
          <div className="carousel-arrows"><button className="icon-button" aria-label="Previous testimonial" onClick={() => change(-1)}><ArrowLeft size={16} /></button><button className="icon-button" aria-label="Next testimonial" onClick={() => change(1)}><ArrowRight size={16} /></button></div>
        </div>
      </div>
    </Reveal>
  </section>;
}
