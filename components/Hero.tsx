import Image from "next/image";
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
        <h1 id="hero-title">Hi, I&apos;m Wildan!</h1>
        <p>Creative Developer</p>
      </div>
      <div className="portrait-wrap entrance entrance-2">
        <Image className="portrait" src="/images/profile.webp" alt="Wildan, creative developer and designer" width={256} height={256} sizes="(max-width: 767px) 200px, 240px" preload />
        <svg className="portrait-ring" viewBox="0 0 300 300" aria-hidden="true">
          <defs><path id="portrait-text-circle" d="M150 150m-130 0a130 130 0 1 1 260 0a130 130 0 1 1-260 0" /></defs>
          <text><textPath href="#portrait-text-circle">• SCROLL DOWN • AND KNOW ME BETTER</textPath></text>
        </svg>
        <a className="scroll-button" href="#about" aria-label="Scroll down to About Me"><ArrowDown size={17} strokeWidth={2.5} /></a>
      </div>
      <div className="hero-credibility entrance entrance-3">
        <span className="client-circles" aria-hidden="true"><i /><i /><i /></span>
        <p>Worked with <strong>30+</strong> clients</p>
      </div>
      <div className="hero-action entrance entrance-4"><ActionLink href="#contact" variant="lavender">Let&apos;s Work Together &amp; Make Something Great</ActionLink></div>
    </div>
  </section>;
}
