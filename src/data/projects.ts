export interface ProjectAd {
  title: string;
  thumbnail: string; // Path in /public/thumbnails/
  videoUrl: string; // Google Drive preview or YouTube embed URL
  horizontal?: boolean; // true for 16:9 (default), false for vertical
}

export interface Project {
  slug: string;
  name: string;
  year: number;
  description: string;
  gradient: string;
  videos: string[]; // YouTube video IDs
  ads?: ProjectAd[]; // Optional ads section
}

export type Platform = "instagram" | "tiktok" | "youtube";

export interface ReelItem {
  title: string;
  platform: Platform;
  views: string;
  likes: string;
  // For thumbnail-based cards (Instagram reels)
  reelUrl?: string; // Direct URL to the reel (opens in new tab)
  thumbnail?: string; // Thumbnail path in /public/thumbnails/
  // For embedded video cards (Google Drive, YouTube)
  embedUrl?: string; // Iframe embed URL (plays inline)
  horizontal?: boolean; // true for 16:9 videos (default is 9:16 vertical)
}

export const projects: Project[] = [
  {
    slug: "shorts-reels",
    name: "Shorts / Reels",
    year: 2024,
    description:
      "Short-form content edited for multiple platforms including YouTube Shorts, Instagram Reels, and TikTok.",
    gradient: "from-emerald-500 to-emerald-700",
    videos: [],
  },
  {
    slug: "uptin",
    name: "Uptin",
    year: 2023,
    description:
      "Uptin Saiidi is an independent journalist who previously worked at CNBC. He now operates as a personal brand across social media platforms. I've been collaborating with him for two years, handling video editing for multiple channels and social platforms. Facebook: 1M followers. TikTok: 880K. YouTube: 135K. Instagram: 150K.",
    gradient: "from-blue-500 to-blue-700",
    videos: ["0LhXKch3QPc", "PTGnlTM2XEU", "erA2yXRG488", "rk7rJK_yuM4"],
    ads: [
      {
        title: "Value Video",
        thumbnail: "/thumbnails/uptin-value-video.jpg",
        videoUrl:
          "https://drive.google.com/file/d/1WDfZlBAvxTObdTqW2SKTxlyQzv_5Jn_H/preview",
      },
      {
        title: "Website Promo",
        thumbnail: "/thumbnails/uptin-website.jpg",
        videoUrl:
          "https://drive.google.com/file/d/1-0jHDpL06xF97i_7o3hwDfM1w6J0pQT4/preview",
      },
    ],
  },
  {
    slug: "lo-de-davi",
    name: "Lo de Davi",
    year: 2022,
    description:
      "Davi is an Argentinian YouTuber who has more than 1 million subscribers. I've been working on this project as main video editor since 05/2021.",
    gradient: "from-purple-500 to-purple-700",
    videos: [
      "M5kjOtokyOs",
      "aQiDijFn5bg",
      "N0PV7eqatNE",
      "4gjw4oZmD3U",
      "3DtLUJzF1oE",
      "fEcBeboZUFM",
    ],
  },
  {
    slug: "animation-and-gfx",
    name: "Animation and GFX",
    year: 2023,
    description:
      "In this section you can see some videos with animations and GFX that showcase motion design and visual effects work.",
    gradient: "from-orange-500 to-orange-700",
    videos: ["oZCIvjcrUzk", "oOh_AwcE-eg", "32u0lQ6A-4s"],
  },
  {
    slug: "el-cafetal",
    name: "El Cafetal",
    year: 2023,
    description:
      "El Cafetal is a Podcast Show from Spain. There, Josue Moreno, its host, interviews popular singers, politicians, and influencers from Spain and Latin America. We produce full episode edits and condensed content for TikTok, Instagram, YouTube, and Facebook.",
    gradient: "from-amber-500 to-amber-700",
    videos: [
      "g_vEQYQam0M",
      "dqeaivBewr0",
      "oAggaBRp5pc",
      "riViWsoe2Dk",
      "7aYrp6MW_qM",
      "a0vAFg7Zk5M",
      "wOWoZQDi0KE",
    ],
  },
  {
    slug: "personal-projects",
    name: "Personal Projects",
    year: 2022,
    description:
      "A collection of personal filmmaking and editing projects exploring creative storytelling and visual narratives.",
    gradient: "from-rose-500 to-rose-700",
    videos: ["DBUVwfnfyRI", "E7t2EWudY_Y", "gEBVewFmpT8", "1qlLKr-u-uU"],
  },
];

// Organic Reels
export const organicReels: ReelItem[] = [
  // Instagram Reels (thumbnail + external link)
  {
    title: "Jaime Lorente — Reflexión sobre la Fe",
    reelUrl: "https://www.instagram.com/reel/DKc5BHwuUmp/",
    platform: "instagram",
    views: "717K",
    likes: "49.5K",
    thumbnail: "/thumbnails/clip-jaime.jpg",
  },
  {
    title: "Rene ZZ — 'Jesús cargó con su cruz'",
    reelUrl: "https://www.instagram.com/reel/C5EXPKviTTH/",
    platform: "instagram",
    views: "1.1M",
    likes: "43.5K",
    thumbnail: "/thumbnails/clip-renezz.jpg",
  },
  {
    title: "Necko Vidal — El Cafetal #23",
    reelUrl: "https://www.instagram.com/reel/DKwLhyyioej/",
    platform: "instagram",
    views: "70K",
    likes: "4.8K",
    thumbnail: "/thumbnails/clip-necko.jpg",
  },
  {
    title: "La Historia de Abraham — Black Mango",
    reelUrl: "https://www.instagram.com/reel/DDhM0I2O1bW/",
    platform: "instagram",
    views: "52K",
    likes: "3.7K",
    thumbnail: "/thumbnails/clip-blackmango.jpg",
  },
  // Uptin Shorts (thumbnail + Google Drive link)
  {
    title: "Dentist Scam",
    platform: "youtube",
    views: "-",
    likes: "-",
    reelUrl: "https://drive.google.com/file/d/1gk8ugbtvRvqGdxl7r_gIms6pyhlTDHw9/preview",
    thumbnail: "/thumbnails/clip-dentist-scam.jpg",
  },
  {
    title: "India's iPhone",
    platform: "youtube",
    views: "-",
    likes: "-",
    reelUrl: "https://drive.google.com/file/d/1UC41CRoMqiPynyh35Q0wrB1R2NsBn3E8/preview",
    thumbnail: "/thumbnails/clip-indias-iphone.jpg",
  },
  {
    title: "UK Postal Codes",
    platform: "youtube",
    views: "-",
    likes: "-",
    reelUrl: "https://drive.google.com/file/d/1C9SKp2hQ6YjOb-sF0c4IX5MTYicp1uvf/preview",
    thumbnail: "/thumbnails/clip-uk-postal-codes.jpg",
  },
  {
    title: "US Was Never #1",
    platform: "youtube",
    views: "-",
    likes: "-",
    reelUrl: "https://drive.google.com/file/d/1_S8FRpMoPBxS-5KM2KNvJB44F2rI-6S7/preview",
    thumbnail: "/thumbnails/clip-us-was-never-1.jpg",
  },
  // Before & After (YouTube embed - horizontal)
  {
    title: "Before & After — Editing Showcase",
    platform: "youtube",
    views: "-",
    likes: "-",
    embedUrl: "https://www.youtube.com/embed/j9gr1vOFzvk",
    horizontal: true,
  },
];

// Ads section - replace with your actual ad reels
export const adReels: ReelItem[] = [];
