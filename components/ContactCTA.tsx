import ActionLink from "./ActionLink";
import Reveal from "./Reveal";
import { getContactHref, siteConfig } from "@/config/site";

export default function ContactCTA() {
  return <div id="contact" className="contact-cta container-wide">
    <Reveal><p className="contact-label">Open channel</p><h2>Have a problem<br />worth building?</h2><ActionLink href={getContactHref()} variant="light">{siteConfig.email || "Contact details coming soon"}</ActionLink></Reveal>
  </div>;
}
