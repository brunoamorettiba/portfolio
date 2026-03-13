import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { ProjectsGrid } from "./components/ProjectsGrid";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";

export function App({
  onNavigate,
}: {
  onNavigate: (path: string) => void;
}) {
  return (
    <>
      <Hero />
      <ProjectsGrid onNavigate={onNavigate} />
      <ContactSection />
      <Footer />
    </>
  );
}
