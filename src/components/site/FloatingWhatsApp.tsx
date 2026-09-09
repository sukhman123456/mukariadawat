import { useState } from "react";
import { site } from "@/lib/site";
import { WhatsAppIcon } from "./SocialIcons";

export function FloatingWhatsApp() {
  const [hovered, setHovered] = useState(false);

  return (
    <aside
      aria-label="WhatsApp Contact"
      className="fixed bottom-20 right-4 lg:bottom-8 lg:right-8 z-40 transition-transform duration-300 select-none"
    >
      <a
        href={site.whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="group relative flex items-center gap-2.5 rounded-full border border-emerald-500/40 bg-gradient-to-br from-[#0E2A1A] via-[#091F13] to-[#040E08] p-3 lg:px-4 lg:py-3 text-emerald-400 shadow-[0_8px_24px_rgba(0,0,0,0.7)] backdrop-blur-xl transition-all duration-300 hover:border-emerald-400 hover:scale-105 hover:shadow-[0_12px_32px_rgba(16,185,129,0.35)] active:scale-95"
        aria-label={`Chat on WhatsApp with ${site.name} Mukerian (${site.whatsapp})`}
      >
        {/* Subtle Ambient Pulse Ring */}
        <span
          aria-hidden="true"
          className="absolute -inset-0.5 rounded-full bg-emerald-500/20 blur-sm group-hover:bg-emerald-500/40 transition-colors"
        />

        {/* Pulsing indicator dot */}
        <span className="relative flex size-3">
          <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex size-3 rounded-full bg-emerald-500" />
        </span>

        {/* WhatsApp Icon */}
        <div className="relative text-emerald-300 group-hover:text-white transition-colors">
          <WhatsAppIcon size={20} />
        </div>

        {/* Desktop Expandable Label */}
        <div className="relative hidden lg:flex flex-col items-start text-left">
          <span className="text-[10px] uppercase font-semibold tracking-wider text-emerald-400/90 leading-none">
            Online · Quick Chat
          </span>
          <span className="text-xs font-semibold text-white tracking-wide leading-tight mt-0.5">
            WhatsApp Us
          </span>
        </div>

        {/* Mobile Tooltip (appears on hover/focus) */}
        {hovered && (
          <div className="absolute bottom-full right-0 mb-2 whitespace-nowrap rounded-lg border border-emerald-500/30 bg-[#0A160F] px-3 py-1.5 text-[11px] font-medium text-emerald-200 shadow-xl lg:hidden">
            Chat on WhatsApp: {site.whatsapp}
          </div>
        )}
      </a>
    </aside>
  );
}
