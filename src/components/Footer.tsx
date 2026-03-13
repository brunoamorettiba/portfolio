import { Instagram, Youtube, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-black/5 px-6 py-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-black/40">
          &copy; {new Date().getFullYear()} Bruno Amoretti. All rights reserved.
        </p>

        <div className="flex items-center gap-4">
          <a
            href="https://www.instagram.com/bruno.amoretti/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black/40 hover:text-black transition-colors"
          >
            <Instagram size={18} />
          </a>
          <a
            href="https://www.youtube.com/channel/UCAe0UUOAJbLBxN67YJGQe2A"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black/40 hover:text-black transition-colors"
          >
            <Youtube size={18} />
          </a>
          <a
            href="mailto:brunoamoretti.ba@gmail.com"
            className="text-black/40 hover:text-black transition-colors"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
