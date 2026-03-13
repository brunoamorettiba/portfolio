import { useState } from "react";
import { FadeIn } from "./FadeIn";
import { Section } from "./Section";
import { Mail, Instagram, Youtube, Send } from "lucide-react";

export function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Opens mailto as fallback
    const subject = encodeURIComponent(
      `Portfolio Contact from ${formState.name}`
    );
    const body = encodeURIComponent(formState.message);
    window.location.href = `mailto:brunoamoretti.ba@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <Section id="contact" className="bg-neutral-50">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* Left: Info */}
        <div>
          <FadeIn>
            <p className="text-xs font-medium tracking-widest uppercase text-black/40 mb-4">
              Contact
            </p>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-6">
              Let's work{" "}
              <span className="text-black/40">together</span>
            </h2>
            <p className="text-black/60 leading-relaxed mb-10">
              I'm always open to new projects and collaborations. Feel free to
              reach out through any of these channels.
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="flex flex-col gap-4">
              <a
                href="mailto:brunoamoretti.ba@gmail.com"
                className="flex items-center gap-3 text-black/60 hover:text-black transition-colors group"
              >
                <div className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center group-hover:bg-emerald-500/10 transition-colors">
                  <Mail size={16} />
                </div>
                brunoamoretti.ba@gmail.com
              </a>
              <a
                href="https://www.instagram.com/bruno.amoretti/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-black/60 hover:text-black transition-colors group"
              >
                <div className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center group-hover:bg-emerald-500/10 transition-colors">
                  <Instagram size={16} />
                </div>
                @bruno.amoretti
              </a>
              <a
                href="https://www.youtube.com/channel/UCAe0UUOAJbLBxN67YJGQe2A"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-black/60 hover:text-black transition-colors group"
              >
                <div className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center group-hover:bg-emerald-500/10 transition-colors">
                  <Youtube size={16} />
                </div>
                YouTube Channel
              </a>
            </div>
          </FadeIn>
        </div>

        {/* Right: Form */}
        <FadeIn delay={0.2}>
          {submitted ? (
            <div className="bg-white rounded-2xl border border-black/5 p-8 flex items-center justify-center min-h-[400px]">
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center mx-auto mb-4">
                  <Send size={20} className="text-emerald-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Thank you!</h3>
                <p className="text-black/60 text-sm">
                  Your email client should have opened. If not, email me
                  directly at brunoamoretti.ba@gmail.com
                </p>
              </div>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl border border-black/5 p-8 flex flex-col gap-5"
            >
              <div>
                <label className="text-xs font-medium tracking-wide text-black/40 uppercase mb-2 block">
                  Name
                </label>
                <input
                  type="text"
                  required
                  value={formState.name}
                  onChange={(e) =>
                    setFormState({ ...formState, name: e.target.value })
                  }
                  className="w-full border border-black/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-shadow"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="text-xs font-medium tracking-wide text-black/40 uppercase mb-2 block">
                  Email
                </label>
                <input
                  type="email"
                  required
                  value={formState.email}
                  onChange={(e) =>
                    setFormState({ ...formState, email: e.target.value })
                  }
                  className="w-full border border-black/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-shadow"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="text-xs font-medium tracking-wide text-black/40 uppercase mb-2 block">
                  Message
                </label>
                <textarea
                  required
                  rows={5}
                  value={formState.message}
                  onChange={(e) =>
                    setFormState({ ...formState, message: e.target.value })
                  }
                  className="w-full border border-black/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-shadow resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              <button
                type="submit"
                className="bg-black text-white text-sm px-6 py-3 rounded-full hover:bg-black/80 transition-all hover:scale-[1.02] active:scale-[0.98] w-full cursor-pointer"
              >
                Send message
              </button>
            </form>
          )}
        </FadeIn>
      </div>
    </Section>
  );
}
