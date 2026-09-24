import Image from "next/image";
import ActionLink from "./ActionLink";
import Reveal from "./Reveal";

export default function About() {
  return <section id="about" className="about container-about" aria-labelledby="about-title">
    <Reveal>
      <div className="about-heading">
        <Image className="about-cube" src="/images/purple-cube.webp" alt="" width={80} height={80} />
        <h2 id="about-title">About Me</h2>
        <Image className="about-pyramid" src="/images/blue-pyramid.webp" alt="" width={80} height={80} />
      </div>
      <div className="about-columns">
        <p>Hello! I&apos;m Wildan, a creative developer and designer who lives at the intersection of code and craft. I build brand identities, expressive interfaces, and playful web experiences that feel alive. With a sharp eye for detail and a love for motion, I turn rough ideas into products people actually enjoy using.</p>
        <p>My work spans identity design, frontend engineering, and interaction. I care about the small things: the weight of a typeface, the ease of a transition, the rhythm of a layout. Every project is a chance to make something that is both useful and a little bit joyful, balancing strong systems with a distinct point of view.</p>
      </div>
      <div className="about-bottom">
        <ActionLink href="#contact">Check my CV</ActionLink>
        <p>My toolkit reflects how modern products get made. I&apos;m fluent in React, Next.js, and TypeScript on the build side, and Figma, Framer, and the Adobe suite on the design side. I keep exploring new tools and techniques so the things I ship stay fresh, fast, and future-ready.</p>
      </div>
    </Reveal>
  </section>;
}
