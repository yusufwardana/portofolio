import { ArrowDown } from "lucide-react";
import FloatingShapes from "./FloatingShapes";
import Marquee from "./Marquee";
import ActionLink from "./ActionLink";

export default function Hero() {
  return <section id="home" className="hero" aria-labelledby="hero-title">
    <div className="hero-wash" aria-hidden="true" />
    <FloatingShapes />
    <Marquee />
    <div className="hero-content">
      <div className="hero-introduction entrance entrance-1">
        <p className="hero-kicker">YUSUF WARDANA</p>
        <h1 id="hero-title">Building systems,<br />products &amp; ideas<br />for the web.</h1>
        <p>Developer &amp; digital builder</p>
      </div>
      <div className="portrait-wrap identity-orbit entrance entrance-2" aria-hidden="true">
        <div className="identity-core"><span>YW</span></div>
        <svg className="portrait-ring" viewBox="0 0 300 300" aria-hidden="true">
          <defs><path id="portrait-text-circle" d="M150 150m-130 0a130 130 0 1 1 260 0a130 130 0 1 1-260 0" /></defs>
          <text><textPath href="#portrait-text-circle">• BUILD • LEARN • ITERATE • BUILD • LEARN • ITERATE</textPath></text>
        </svg>
        <a className="scroll-button" href="#about" aria-label="Scroll down to About"><ArrowDown size={17} strokeWidth={2.5} /></a>
      </div>
      <div className="hero-credibility entrance entrance-3">
        <span className="client-circles" aria-hidden="true"><i /><i /><i /></span>
        <p>Exploring <strong>software</strong> where products meet real-world systems.</p>
      </div>
      <div className="hero-action entrance entrance-4"><ActionLink href="#projects" variant="lavender">See selected work</ActionLink></div>
    </div>
  </section>;
}
