import type { CSSProperties } from "react";

const signals = ["signal-cyan", "signal-lime", "signal-violet", "signal-orange", "signal-grid", "signal-ring"];

export default function FloatingShapes() {
  return <div className="floating-shapes" aria-hidden="true">
    {signals.map((signal, i) => <div key={signal} className={`shape ${signal}`} style={{ "--float-delay": `${i * -1.3}s`, "--float-duration": `${6 + i * 0.7}s` } as CSSProperties} />)}
  </div>;
}
