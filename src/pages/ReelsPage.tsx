import { FadeIn } from "../components/FadeIn";
import { Section } from "../components/Section";
import { Footer } from "../components/Footer";
import { organicReels, adReels, type ReelItem } from "../data/projects";
import {
  ArrowLeft,
  Film,
  Megaphone,
  Play,
  ExternalLink,
  Eye,
  Heart,
} from "lucide-react";

const platformColors: Record<string, { badge: string; label: string }> = {
  instagram: {
    badge: "bg-pink-500/30 text-white",
    label: "bg-pink-50 text-pink-600",
  },
  tiktok: {
    badge: "bg-cyan-500/30 text-white",
    label: "bg-cyan-50 text-cyan-600",
  },
  youtube: {
    badge: "bg-red-500/30 text-white",
    label: "bg-red-50 text-red-600",
  },
};

const platformName: Record<string, string> = {
  instagram: "Instagram",
  tiktok: "TikTok",
  youtube: "YouTube",
};

function ClipCard({ item, index }: { item: ReelItem; index: number }) {
  const colors = platformColors[item.platform] || platformColors.instagram;
  const isEmbed = !!item.embedUrl;

  return (
    <FadeIn
      delay={index * 0.1}
      className={item.horizontal ? "lg:col-span-full" : ""}
    >
      <div className="bg-white rounded-[2rem] border border-black/5 shadow-sm overflow-hidden hover:shadow-lg transition-shadow duration-500">
        {/* Video Preview */}
        <div className="p-4">
          {isEmbed ? (
            /* Embedded video (Google Drive / YouTube) */
            <div
              className={`${item.horizontal ? "aspect-[16/9]" : "aspect-[3/4]"} rounded-2xl bg-neutral-900 relative overflow-hidden`}
            >
              <iframe
                src={item.embedUrl}
                className="absolute inset-0 w-full h-full rounded-2xl"
                allow="autoplay; encrypted-media"
                allowFullScreen
                title={item.title}
              />
            </div>
          ) : (
            /* Thumbnail + external link (Instagram reels) */
            <a
              href={item.reelUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block aspect-[9/16] rounded-2xl bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-700 relative overflow-hidden group cursor-pointer"
            >
              {/* Thumbnail */}
              {item.thumbnail && (
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              )}

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-black/30 z-10" />

              {/* Platform badge */}
              <div className="absolute top-4 left-4 z-20">
                <div
                  className={`px-3 py-1.5 rounded-full text-[10px] font-bold tracking-widest uppercase backdrop-blur-md ${colors.badge}`}
                >
                  {item.platform}
                </div>
              </div>

              {/* Play button */}
              <div className="absolute inset-0 z-20 flex items-center justify-center">
                <div className="w-16 h-16 bg-black/30 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-black/50 group-hover:scale-110 transition-all duration-300 shadow-lg">
                  <Play size={28} className="text-white ml-1" fill="white" />
                </div>
              </div>

              {/* Bottom label */}
              <div className="absolute bottom-4 left-4 right-4 z-20">
                <p className="text-white/80 text-xs font-medium flex items-center gap-1 drop-shadow-md">
                  <ExternalLink size={12} />{" "}
                  {item.thumbnail
                    ? `Ver en ${platformName[item.platform] || "Instagram"}`
                    : "Ver video"}
                </p>
              </div>
            </a>
          )}
        </div>

        {/* Info */}
        <div className="px-6 pb-6">
          <h4 className="font-bold text-lg mb-3 leading-snug">{item.title}</h4>

          {/* Platform label */}
          <span
            className={`inline-block px-3 py-1 text-[10px] font-bold tracking-widest uppercase rounded-full mb-4 ${colors.label}`}
          >
            {item.platform}
          </span>

          {/* Metrics */}
          {(item.views !== "-" || item.likes !== "-") && (
            <div className="flex items-center gap-4">
              {item.views !== "-" && (
                <div className="flex items-center gap-1.5 text-sm text-black/50">
                  <Eye size={14} /> {item.views}
                </div>
              )}
              {item.likes !== "-" && (
                <div className="flex items-center gap-1.5 text-sm text-black/50">
                  <Heart size={14} /> {item.likes}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </FadeIn>
  );
}

function ReelGrid({
  items,
  columns = 4,
}: {
  items: ReelItem[];
  columns?: 2 | 3 | 4;
}) {
  if (items.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-black/10 p-12 text-center">
        <p className="text-black/40 text-sm">Coming soon</p>
      </div>
    );
  }

  const gridClass =
    columns === 2
      ? "grid grid-cols-1 sm:grid-cols-2 gap-6"
      : columns === 3
        ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6";

  return (
    <div className={gridClass}>
      {items.map((item, i) => (
        <ClipCard key={i} item={item} index={i} />
      ))}
    </div>
  );
}

export function ReelsPage({
  onNavigate,
}: {
  onNavigate: (path: string) => void;
}) {
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
              <span className="text-sm text-black/40">2024</span>
            </div>
            <h1 className="text-4xl md:text-7xl font-bold tracking-tighter mb-6">
              Shorts / <span className="text-black/40">Reels</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.1}>
            <p className="text-lg text-black/60 leading-relaxed max-w-3xl mb-16">
              Short-form content edited for multiple platforms including YouTube
              Shorts, Instagram Reels, and TikTok. From organic content to paid
              advertising.
            </p>
          </FadeIn>

          {/* Organic Reels Section */}
          <FadeIn delay={0.2}>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center">
                <Film size={18} className="text-emerald-600" />
              </div>
              <div>
                <h2 className="text-2xl font-bold tracking-tight">
                  Organic Reels
                </h2>
                <p className="text-sm text-black/40">
                  Content created for organic reach
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Thumbnail-based reels - 4 columns */}
          <ReelGrid
            items={organicReels.filter((r) => !!r.thumbnail)}
            columns={4}
          />

          {/* Embed-based reels (YouTube horizontal, etc.) */}
          {organicReels.some((r) => !!r.embedUrl) && (
            <div className="mt-10">
              <ReelGrid
                items={organicReels.filter((r) => !!r.embedUrl)}
                columns={2}
              />
            </div>
          )}
        </Section>

        {/* Ads Section */}
        {adReels.length > 0 && (
          <Section className="bg-neutral-50">
            <FadeIn>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center">
                  <Megaphone size={18} className="text-amber-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold tracking-tight">Ads</h2>
                  <p className="text-sm text-black/40">
                    Paid advertising content
                  </p>
                </div>
              </div>
            </FadeIn>

            <ReelGrid items={adReels} />
          </Section>
        )}
      </div>
      <Footer />
    </>
  );
}
