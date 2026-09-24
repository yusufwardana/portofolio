import { navigation } from "@/data/portfolio";
import Brand from "./Brand";
import ContactCTA from "./ContactCTA";
import { siteConfig } from "@/config/site";

export default function Footer() {
  return <footer id="footer" className="footer">
    <ContactCTA />
    <div className="footer-divider"><div className="footer-grid container-wide">
      <div className="footer-about"><Brand footer /><p>Developer and digital builder working across web applications, automation, AI experiments, and connected systems.</p></div>
      <nav aria-label="Footer navigation"><h3>Explore</h3><ul>{navigation.slice(0, 5).map(link => <li key={link.label}><a href={link.href}>{link.label}</a></li>)}</ul></nav>
      <nav aria-label="Social links"><h3>Elsewhere</h3><ul>
        {siteConfig.socials.github && <li><a href={siteConfig.socials.github} target="_blank" rel="noreferrer noopener">GitHub</a></li>}
        {siteConfig.socials.linkedin && <li><a href={siteConfig.socials.linkedin} target="_blank" rel="noreferrer noopener">LinkedIn</a></li>}
        <li><a href="#contact">Contact</a></li>
      </ul></nav>
    </div></div>
    <div className="footer-divider"><div className="footer-bottom container-wide"><p>© {new Date().getFullYear()} {siteConfig.name}. Built with intent.</p><p>{siteConfig.url.replace("https://", "")}</p></div></div>
  </footer>;
}
