export const navigation = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Stack", href: "#stack" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Bug Bounty", href: "https://wildanoel.dev/bug-bounty" },
  { label: "Design", href: "https://wildanoel.dev/design" },
  { label: "Router", href: "https://router.wildanoel.dev/" },
] as const;

export interface Tool {
  name: string;
  icon?: string;
  description: string;
}

export const tools: Tool[] = [
  { name: "React", icon: "react", description: "My default for building interfaces. Component thinking, hooks, and a strong ecosystem let me move fast without losing structure." },
  { name: "Next.js", icon: "nextdotjs", description: "The framework I reach for on real products. Server components, routing, and image handling out of the box, ready to deploy." },
  { name: "TypeScript", icon: "typescript", description: "Confidence as a project grows. Clear types make components easier to understand, changes safer, and collaboration smoother." },
  { name: "Tailwind CSS", icon: "tailwindcss", description: "My styling toolkit for translating design into responsive interfaces. Consistent spacing, thoughtful typography, and fast iteration without losing control." },
  { name: "Framer Motion", icon: "framer", description: "The motion layer for my React projects. From small hover details to expressive page transitions, it helps every interaction feel natural." },
  { name: "Figma", icon: "figma", description: "Where ideas become interfaces. I use Figma for visual exploration, interactive prototypes, and shared design systems that carry through to code." },
  { name: "Node.js", icon: "nodedotjs", description: "JavaScript beyond the browser. APIs, tooling, and integrations that connect a polished frontend to the services behind it." },
  { name: "GSAP", icon: "greensock", description: "For the moments that need a little more choreography. Precise timelines and scroll-driven animation bring ambitious creative ideas to life." },
  { name: "Adobe Illustrator", description: "My canvas for brand identities, custom typography, and vector artwork. Turning a strong idea into a visual language that scales." },
  { name: "Git", icon: "git", description: "A dependable history of every idea and iteration. Small commits, clear branches, and thoughtful collaboration keep projects moving forward." },
];

export const services = [
  { title: "Frontend Development", description: "Turning designs into fast, accessible, production-ready interfaces. I build with React, Next.js, and TypeScript, focusing on clean architecture, reusable components, and interactions that feel effortless across every device." },
  { title: "Brand & Identity Design", description: "Building a visual language that feels unmistakably yours. From logos and typography to color and brand guidelines, I create cohesive identities with personality and purpose." },
  { title: "Web Design & UI/UX", description: "Designing intuitive, expressive digital experiences. I translate real user needs into thoughtful layouts, clear journeys, and interfaces that balance beauty with usability." },
  { title: "Motion & Interaction", description: "Making interfaces feel alive through purposeful animation. Subtle feedback, fluid transitions, and carefully choreographed moments guide people through an experience." },
  { title: "Design Systems", description: "Creating a shared foundation for consistent products. Reusable components, design tokens, and practical documentation help teams move faster while keeping every detail connected." },
  { title: "Creative Development", description: "Exploring the space where design meets code. Interactive experiments, playful graphics, and unconventional web experiences turn a distinctive idea into something people remember." },
];

export interface Project {
  name: string;
  category: string;
  year: number;
  description: string;
  tags: string[];
  image: string;
  href: string;
}

export const projects: Project[] = [
  { name: "Eiyaiy", category: "AI Data Platform", year: 2026, description: "A platform that turns the messy public web into clean, reliable data for AI. Landing, docs, and dashboard built for speed and clarity.", tags: ["AI", "Web Data", "SaaS"], image: "eiyaiy", href: "https://eiyaiy.xyz/" },
  { name: "RounderOne", category: "Developer Tool", year: 2026, description: "One API to search, scrape, map, and crawl any public page into clean, LLM-ready Markdown. Guarded endpoints that return source URLs and metadata.", tags: ["Next.js", "API", "LLM"], image: "rounderone", href: "https://rounderone.app/" },
  { name: "Ejen Tech", category: "AI Product", year: 2026, description: "An AI customer-service engine that spots buying signals in every conversation and turns support into revenue. Bold, conversion-focused marketing site.", tags: ["AI", "SaaS", "Conversion"], image: "ejen", href: "https://ejen.tech/" },
  { name: "Artvition", category: "Web Agency", year: 2026, description: "A professional web-development studio offering landing pages, company profiles, online stores, and custom web apps. Fast delivery, modern design.", tags: ["Web Design", "Agency", "React"], image: "artvition", href: "https://artvition.my.id/" },
];

export const testimonials = [
  { quote: "Wildan rebuilt our brand and our marketing site from the ground up. He translated a vague brief into a clear visual language and shipped a site that loads fast and feels premium. He is rare in that he thinks like a designer and executes like an engineer.", name: "Mitchael", role: "Product Lead, Eiyaiy", color: "#ff6035" },
  { quote: "He owned the frontend for a full product launch, from design system to production code. Clean components, considered motion, and zero drama under deadline. I would bring him onto any team without hesitation.", name: "Arif Santoso", role: "Founder, Artvition", color: "#357bf6" },
];
