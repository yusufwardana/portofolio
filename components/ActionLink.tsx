import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

export default function ActionLink({ href, children, variant = "dark", className = "" }: { href: string; children: ReactNode; variant?: "dark" | "lavender" | "light"; className?: string }) {
  return <a href={href} className={`action-link action-${variant} ${className}`}>
    <span>{children}</span><span className="action-icon" aria-hidden="true"><ArrowRight size={14} strokeWidth={2.5} /></span>
  </a>;
}
