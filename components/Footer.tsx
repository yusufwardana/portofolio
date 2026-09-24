import { navigation } from "@/data/portfolio";
import Brand from "./Brand";
import ContactCTA from "./ContactCTA";

export default function Footer() {
  return <footer id="footer" className="footer">
    <ContactCTA />
    <div className="footer-divider"><div className="footer-grid container-wide">
      <div className="footer-about"><Brand footer /><p>Creative developer and designer building expressive, playful digital products.</p></div>
      <nav aria-label="Footer navigation"><h3>Useful links</h3><ul>{navigation.slice(0, 5).map(link => <li key={link.label}><a href={link.href}>{link.label}</a></li>)}</ul></nav>
      <nav aria-label="Social links"><h3>Social</h3><ul><li><a href="https://github.com/wildanoel" target="_blank" rel="noreferrer noopener">GitHub</a></li><li><a href="https://linkedin.com/in/wildanmtv/" target="_blank" rel="noreferrer noopener">LinkedIn</a></li><li><a href="mailto:hello@wildanoel.dev">Email</a></li></ul></nav>
    </div></div>
    <div className="footer-divider"><div className="footer-bottom container-wide"><p>© {new Date().getFullYear()} Wildanoel. All rights reserved.</p><p>Designed &amp; built by Wildanoel</p></div></div>
  </footer>;
}
