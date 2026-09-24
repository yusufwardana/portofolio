import type { Variants } from "framer-motion";

export const ease = [0.22, 1, 0.36, 1] as const;
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease } },
};
export const switchContent: Variants = {
  hidden: { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.25, ease } },
  exit: { opacity: 0, y: -6, transition: { duration: 0.15 } },
};
