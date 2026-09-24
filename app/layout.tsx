import type { Metadata } from "next";
import "@fontsource-variable/manrope";
import "@fontsource-variable/public-sans";
import { siteConfig } from "@/config/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: siteConfig.title,
  description: siteConfig.description,
  keywords: siteConfig.seo.keywords,
  alternates: { canonical: siteConfig.url },
  openGraph: { type: "website", url: siteConfig.url, title: siteConfig.title, description: siteConfig.description, siteName: siteConfig.name },
  twitter: { card: "summary", title: siteConfig.title, description: siteConfig.description },
  robots: { index: true, follow: true },
};

const themeScript = `(function(){try{var t=localStorage.getItem('portfolio-theme');document.documentElement.dataset.theme=t==='dark'?'dark':'light'}catch(e){}})()`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const personSchema = { "@context": "https://schema.org", "@type": "Person", name: siteConfig.name, url: siteConfig.url, jobTitle: "Developer & Digital Builder" };
  const websiteSchema = { "@context": "https://schema.org", "@type": "WebSite", name: siteConfig.name, url: siteConfig.url, description: siteConfig.description };
  return <html lang="en" suppressHydrationWarning><head>
    <script dangerouslySetInnerHTML={{ __html: themeScript }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
  </head><body><a href="#main-content" className="skip-link">Skip to content</a>{children}</body></html>;
}
