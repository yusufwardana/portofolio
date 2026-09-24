"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { fadeUp } from "@/animations/variants";

export default function Reveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  const reduced = useReducedMotion();
  return (
    <motion.div className={className} initial={false} whileInView={reduced ? undefined : "visible"} viewport={{ once: true, amount: 0.12 }} variants={fadeUp}>
      {children}
    </motion.div>
  );
}
