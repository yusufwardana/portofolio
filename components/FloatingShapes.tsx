import Image from "next/image";
import type { CSSProperties } from "react";

const shapes = ["orange-pyramid", "purple-sphere", "blue-cylinder", "turquoise-star", "lime-object", "yellow-cube"];

export default function FloatingShapes() {
  return <div className="floating-shapes" aria-hidden="true">
    {shapes.map((shape, i) => <div key={shape} className={`shape shape-${shape}`} style={{ "--float-delay": `${i * -1.3}s`, "--float-duration": `${6 + i * 0.7}s` } as CSSProperties}>
      <Image src={`/images/${shape}.webp`} alt="" width={384} height={384} sizes="(max-width: 767px) 100px, (max-width: 1280px) 240px, 340px" preload={i < 2} />
    </div>)}
  </div>;
}
