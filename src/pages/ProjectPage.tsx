import { FadeIn } from "../components/FadeIn";
import { Section } from "../components/Section";
import { Footer } from "../components/Footer";
import { projects } from "../data/projects";
import { ArrowLeft, Megaphone, Play, Smartphone } from "lucide-react";

export function ProjectPage({
  slug,
  onNavigate,
}: {
  slug: string;
  onNavigate: (path: string) => void;
}) {
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <Section className="min-h-screen flex items-center justify-center pt-24">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Project not found</h1>
          <button
            onClick={() => onNavigate("/")}
            className="text-emerald-600 hover:underline cursor-pointer"
          >
            Go back home
          </button>
        </div>
      </Section>
    );
  }

  // For shorts-reels, redirect to the dedicated reels page
  if (project.slug === "shorts-reels") {
    onNavigate("/reels");
    return null;
  }

  const otherProjects = projects.filter((p) => p.slug !== slug).slice(0, 4);

  return (
    <>
      <div className="pt-24">
        <Section>
          {/* Back button */}
          <FadeIn>
            <button
              onClick={() => onNavigate("/")}
              className="flex items-center gap-2 text-sm text-black/40 hover:text-black transition-colors mb-12 cursor-pointer"
            >
              <ArrowLeft size={16} />
              Back to projects
            </button>
          </FadeIn>

          {/* Header */}
          <FadeIn>
            <div className="flex items-center gap-4 mb-4">
              <span className="text-sm text-black/40">{project.year}</span>
            </div>
            <h1 className="text-4xl md:text-7xl font-bold tracking-tighter mb-6">
              {project.name}
            </h1>
          </FadeIn>

          <FadeIn delay={0.1}>
            <p className="text-lg text-black/60 leading-relaxed max-w-3xl mb-16">
              {project.description}
            </p>
          </FadeIn>

          {/* Videos */}
          <div className="grid grid-cols-1 gap-8">
            {project.videos.map((videoId, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="aspect-video rounded-2xl overflow-hidden border border-black/5 shadow-sm">
                  <iframe
                    src={`https://www.youtube.com/embed/${videoId}`}
                    title={`${project.name} - Video ${i + 1}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
              </FadeIn>
            ))}
          </div>
        </Section>

        {/* Shorts Section */}
        {project.shorts && project.shorts.length > 0 && (
          <Section>
            <FadeIn>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center">
                  <Smartphone size={18} className="text-emerald-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold tracking-tight">
                    Short-form clips
                  </h2>
                  <p className="text-sm text-black/40">
                    Vertical clips cut from the episodes
                  </p>
                </div>
              </div>
            </FadeIn>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {project.shorts.map((videoId, i) => (
                <FadeIn key={videoId} delay={(i % 4) * 0.1}>
                  <div className="aspect-[9/16] rounded-2xl overflow-hidden border border-black/5 shadow-sm bg-neutral-900">
                    <iframe
                      src={`https://www.youtube.com/embed/${videoId}`}
                      title={`${project.name} - Short ${i + 1}`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      loading="lazy"
                      className="w-full h-full"
                    />
                  </div>
                </FadeIn>
              ))}
            </div>
          </Section>
        )}

        {/* Ads Section */}
        {project.ads && project.ads.length > 0 && (
          <Section>
            <FadeIn>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center">
                  <Megaphone size={18} className="text-amber-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold tracking-tight">Ads</h2>
                  <p className="text-sm text-black/40">
                    Paid advertising & promotional content
                  </p>
                </div>
              </div>
            </FadeIn>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {project.ads.map((ad, i) => (
                <FadeIn key={i} delay={i * 0.1}>
                  <div className="bg-white rounded-[2rem] border border-black/5 shadow-sm overflow-hidden hover:shadow-lg transition-shadow duration-500">
                    <div className="p-4">
                      <a
                        href={ad.videoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block aspect-video rounded-2xl bg-neutral-900 relative overflow-hidden group cursor-pointer"
                      >
                        <img
                          src={ad.thumbnail}
                          alt={ad.title}
                          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-black/20 z-10" />
                        <div className="absolute inset-0 z-20 flex items-center justify-center">
                          <div className="w-16 h-16 bg-black/30 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-black/50 group-hover:scale-110 transition-all duration-300 shadow-lg">
                            <Play
                              size={28}
                              className="text-white ml-1"
                              fill="white"
                            />
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="px-6 pb-6">
                      <h4 className="font-bold text-lg leading-snug">
                        {ad.title}
                      </h4>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </Section>
        )}

        {/* Other projects */}
        <Section className="bg-neutral-50">
          <FadeIn>
            <h2 className="text-2xl font-bold tracking-tight mb-8">
              You may also like
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {otherProjects.map((p, i) => (
              <FadeIn key={p.slug} delay={i * 0.1}>
                <button
                  onClick={() => {
                    window.scrollTo({ top: 0 });
                    onNavigate(`/project/${p.slug}`);
                  }}
                  className="group w-full text-left rounded-xl overflow-hidden border border-black/5 hover:shadow-lg transition-all cursor-pointer"
                >
                  <div
                    className={`aspect-video bg-gradient-to-br ${p.gradient}`}
                  />
                  <div className="p-4">
                    <h3 className="text-sm font-semibold">{p.name}</h3>
                    <span className="text-xs text-black/40">{p.year}</span>
                  </div>
                </button>
              </FadeIn>
            ))}
          </div>
        </Section>
      </div>
      <Footer />
    </>
  );
}
