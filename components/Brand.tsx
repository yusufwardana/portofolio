import Image from "next/image";

export default function Brand({ footer = false }: { footer?: boolean }) {
  return <a className={`brand${footer ? " brand-footer" : ""}`} href="#home" aria-label="Wildanoel home">
    {footer ? <span className="brand-dot" aria-hidden="true" /> : <Image src="/images/logo-96.webp" width={24} height={24} alt="" />}
    <span>Wildanoel</span>
  </a>;
}
