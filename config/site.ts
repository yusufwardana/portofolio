export interface SocialLinks {
  github: string;
  linkedin: string;
  email: string;
}

export const siteConfig = {
  name: "Yusuf Wardana",
  shortName: "Yusuf",
  title: "Yusuf Wardana — Developer & Digital Builder",
  description: "Portfolio of Yusuf Wardana, building web applications, automation systems, AI experiments, and digital products.",
  url: "https://yusufwardana.my.id",
  email: "",
  socials: {
    github: "",
    linkedin: "",
    email: "",
  } satisfies SocialLinks,
  seo: {
    keywords: ["Yusuf Wardana", "web development", "automation", "AI experiments", "digital products"] as string[],
  },
} as const;

export function getContactHref() {
  return siteConfig.email ? `mailto:${siteConfig.email}` : "#contact";
}