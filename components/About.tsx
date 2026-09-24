import ActionLink from "./ActionLink";
import Reveal from "./Reveal";
import { getContactHref } from "@/config/site";

export default function About() {
  return <section id="about" className="about container-about" aria-labelledby="about-title">
    <Reveal>
      <div className="about-heading">
        <h2 id="about-title">About Me</h2>
        <span className="about-signal" aria-hidden="true">+</span>
      </div>
      <div className="about-columns">
        <p>I like building software that makes a real workflow clearer. My work sits between web development, backend systems, automation, and the experiments that happen when a useful idea is still taking shape.</p>
        <p>I am interested in the space where software meets the physical world: network operations, internal tools, AI-assisted workflows, and digital products that solve a specific problem without adding unnecessary noise.</p>
      </div>
      <div className="about-bottom">
        <ActionLink href={getContactHref()}>Start a conversation</ActionLink>
        <p>Currently exploring web applications, automation, AI integration, and tools for connected systems. This portfolio will grow as the work becomes ready to share.</p>
      </div>
    </Reveal>
  </section>;
}
