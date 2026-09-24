import type { Metadata } from "next";
import "@fontsource-variable/manrope";
import "@fontsource-variable/public-sans";
import "./globals.css";

export const metadata: Metadata = {
  title: "Wildanoel | Creative Developer & Designer",
  description: "Creative development, expressive interfaces, and thoughtful design. An independent recreation of the Wildanoel portfolio homepage.",
  robots: { index: false, follow: false },
  icons: { icon: "/images/logo-96.webp" },
};

const themeScript = `(function(){try{var t=localStorage.getItem('portfolio-theme');document.documentElement.dataset.theme=t==='dark'?'dark':'light'}catch(e){}})()`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" suppressHydrationWarning><head><script dangerouslySetInnerHTML={{ __html: themeScript }} /></head><body><a href="#main-content" className="skip-link">Skip to content</a>{children}</body></html>;
}
