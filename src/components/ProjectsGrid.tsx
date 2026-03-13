import { FadeIn } from "./FadeIn";
import { Section } from "./Section";
import { projects } from "../data/projects";
import { ArrowUpRight } from "lucide-react";

export function ProjectsGrid({
  onNavigate,
}: {
  onNavigate: (path: string) => void;
}) {
  return (
    <Section id="work">
      <FadeIn>
        <p className="text-xs font-medium tracking-widest uppercase text-black/40 mb-4">
          Selected Work
        </p>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-16">
          Projects
        </h2>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, i) => (
          <FadeIn key={project.slug} delay={i * 0.1}>
            <button
              onClick={() => onNavigate(`/project/${project.slug}`)}
              className="group relative w-full text-left rounded-2xl overflow-hidden border border-black/5 hover:shadow-xl hover:shadow-black/5 transition-all duration-500 hover:scale-[1.01] cursor-pointer"
            >
              {/* Gradient thumbnail */}
              <div
                className={`aspect-video bg-gradient-to-br ${project.gradient} relative`}
              >
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
                <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ArrowUpRight size={16} />
                </div>
              </div>

              {/* Info */}
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold tracking-tight">
                    {project.name}
                  </h3>
                  <span className="text-sm text-black/40">{project.year}</span>
                </div>
              </div>
            </button>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
