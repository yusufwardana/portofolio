export interface NavigationItem {
  label: string;
  href: string;
}

export interface Tool {
  name: string;
  category: "Frontend" | "Backend" | "Database" | "Infrastructure" | "Automation" | "AI" | "Tools";
  description: string;
}

export interface Capability {
  title: string;
  description: string;
}

export interface Project {
  title: string;
  slug: string;
  year: number | string;
  category: string;
  description: string;
  problem: string;
  role: string;
  stack: string[];
  visual: "cyan" | "lime" | "violet" | "orange";
  url?: string;
  github?: string;
  featured: boolean;
  status: "Concept" | "Prototype" | "In development" | "Active";
}

export interface LabEntry {
  title: string;
  type: string;
  description: string;
  status: "Exploring" | "Prototype" | "In progress";
}

export const navigation: NavigationItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Stack", href: "#stack" },
  { label: "Lab", href: "#lab" },
  { label: "Contact", href: "#contact" },
];

export const tools: Tool[] = [
  { name: "Laravel", category: "Backend", description: "A practical foundation for building maintainable web applications, internal systems, and APIs." },
  { name: "PHP", category: "Backend", description: "A dependable language for turning product requirements into focused, useful server-side software." },
  { name: "Next.js", category: "Frontend", description: "A flexible React framework for fast interfaces, content-driven sites, and full-stack experiments." },
  { name: "React", category: "Frontend", description: "Component-based UI engineering for interfaces that stay understandable as they grow." },
  { name: "TypeScript", category: "Tools", description: "Types that make product code easier to navigate, change, and reason about." },
  { name: "PostgreSQL", category: "Database", description: "Relational data modeling for applications that need clear structure and trustworthy queries." },
  { name: "Docker", category: "Infrastructure", description: "Reproducible environments for moving an idea from a local machine toward deployment." },
  { name: "MikroTik", category: "Infrastructure", description: "Network tooling and integrations for software that connects with real operational infrastructure." },
  { name: "Node.js", category: "Automation", description: "A useful runtime for scripts, integrations, data workflows, and small tools that remove repetitive work." },
  { name: "AI APIs", category: "AI", description: "A place to explore practical AI features that support a product instead of obscuring it." },
];

export const capabilities: Capability[] = [
  { title: "Web Applications", description: "Product interfaces and full-stack applications that turn a workflow into something people can actually use." },
  { title: "Backend Systems", description: "APIs, data models, and internal tools designed around clear responsibilities and useful outcomes." },
  { title: "Automation", description: "Small systems that connect services, reduce repetitive work, and make operations easier to observe." },
  { title: "AI Integration", description: "Experiments with AI APIs and intelligent workflows grounded in a real product or operational problem." },
  { title: "Network Tools", description: "Software ideas that sit close to infrastructure, monitoring, and the practical needs of connected systems." },
  { title: "Product Experiments", description: "Focused prototypes used to test a direction, learn quickly, and decide what deserves a deeper build." },
];

export const projects: Project[] = [
  {
    title: "CosmicLink",
    slug: "cosmiclink",
    year: "In progress",
    category: "ISP operations platform",
    description: "An all-in-one direction for ISP operations, customer workflows, billing, monitoring, and network automation.",
    problem: "ISP operations often live across disconnected tools and manual handoffs.",
    role: "Product direction and engineering exploration.",
    stack: ["Web application", "Automation", "MikroTik"],
    visual: "cyan",
    featured: true,
    status: "In development",
  },
  {
    title: "CELMS",
    slug: "celms",
    year: "Prototype",
    category: "Library platform",
    description: "A modern direction for library management and a public catalog experience, designed around clarity for both staff and readers.",
    problem: "Library information should be easier to discover, manage, and keep current.",
    role: "System design and product prototyping.",
    stack: ["Catalog", "Administration", "PWA direction"],
    visual: "lime",
    featured: true,
    status: "Prototype",
  },
  {
    title: "RADAR",
    slug: "radar",
    year: "Exploring",
    category: "Public-data intelligence",
    description: "An exploration of monitoring public data, detecting change, and turning signals into something easier to understand.",
    problem: "Useful public signals are often scattered, delayed, or difficult to compare over time.",
    role: "Concept development and technical exploration.",
    stack: ["Data ingestion", "Change detection", "Signals"],
    visual: "violet",
    featured: false,
    status: "Concept",
  },
  {
    title: "CosmicStudio",
    slug: "cosmicstudio",
    year: "Exploring",
    category: "Creative production system",
    description: "An AI-assisted creative workflow concept for moving from rough direction to useful production output.",
    problem: "Creative work benefits from faster iteration without losing human judgment or intent.",
    role: "Product concept and experimentation.",
    stack: ["AI-assisted", "Workflow", "Prototype"],
    visual: "orange",
    featured: false,
    status: "Concept",
  },
];

export const labEntries: LabEntry[] = [
  { title: "Automation sketches", type: "Workflow", description: "Small experiments that connect tools and make recurring work less repetitive.", status: "Exploring" },
  { title: "AI product notes", type: "AI", description: "Testing where AI can make a product more useful, observable, and human-readable.", status: "In progress" },
  { title: "Network experiments", type: "Infrastructure", description: "Learning from the edge where software meets connected devices, traffic, and operations.", status: "Prototype" },
];