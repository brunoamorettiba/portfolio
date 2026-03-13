import { StrictMode, useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { App } from "./App";
import { Navbar } from "./components/Navbar";
import { ProjectPage } from "./pages/ProjectPage";
import { ReelsPage } from "./pages/ReelsPage";

function Router() {
  const [path, setPath] = useState(window.location.pathname);

  useEffect(() => {
    const handlePopState = () => setPath(window.location.pathname);
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const navigate = (newPath: string) => {
    window.history.pushState({}, "", newPath);
    setPath(newPath);
    window.scrollTo({ top: 0 });
  };

  const renderPage = () => {
    if (path === "/" || path === "") {
      return <App onNavigate={navigate} />;
    }

    if (path === "/reels" || path === "/reels/") {
      return <ReelsPage onNavigate={navigate} />;
    }

    const projectMatch = path.match(/^\/project\/(.+?)\/?$/);
    if (projectMatch) {
      const slug = projectMatch[1];
      if (slug === "shorts-reels") {
        // Redirect to dedicated reels page
        navigate("/reels");
        return null;
      }
      return <ProjectPage slug={slug} onNavigate={navigate} />;
    }

    // 404 fallback
    return <App onNavigate={navigate} />;
  };

  return (
    <div className="min-h-screen">
      <Navbar onNavigate={navigate} />
      {renderPage()}
    </div>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Router />
  </StrictMode>
);
