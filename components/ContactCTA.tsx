import ActionLink from "./ActionLink";
import Reveal from "./Reveal";

export default function ContactCTA() {
  return <div id="contact" className="contact-cta container-wide">
    <Reveal><p className="contact-label">Contact me</p><h2>Let&apos;s build<br />something great.</h2><ActionLink href="mailto:hello@wildanoel.dev" variant="light">hello@wildanoel.dev</ActionLink></Reveal>
  </div>;
}
