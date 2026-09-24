import { siteConfig } from "@/config/site";

export default function Brand({ footer = false }: { footer?: boolean }) {
  return <a className={`brand${footer ? " brand-footer" : ""}`} href="#home" aria-label={`${siteConfig.name} home`}>
    <span className="brand-mark" aria-hidden="true">YW</span>
    <span>{siteConfig.name}</span>
  </a>;
}
