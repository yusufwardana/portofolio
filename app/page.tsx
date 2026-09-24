import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Testimonial from "@/components/Testimonial";
import TechStack from "@/components/TechStack";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

export default function HomePage() {
  return <><div id="top-sentinel" aria-hidden="true" /><Navbar /><main id="main-content"><Hero /><About /><Testimonial /><TechStack /><Services /><Projects /></main><Footer /></>;
}
