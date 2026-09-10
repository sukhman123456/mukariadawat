import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";
import { ArrowLeft, Home as HomeIcon, UtensilsCrossed, Phone } from "lucide-react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { MobileActionBar } from "@/components/site/MobileActionBar";
import { FloatingWhatsApp } from "@/components/site/FloatingWhatsApp";
import { Toaster } from "@/components/ui/sonner";
import { LanguageProvider } from "@/lib/translations";
import { site } from "@/lib/site";

function NotFoundComponent() {
  return (
    <div className="flex min-h-[75vh] items-center justify-center bg-[#FAF7F2] px-4 py-16 text-center text-[#1C1917]">
      <div className="relative max-w-lg rounded-3xl border border-[#B47A46]/30 bg-[#1C1917] p-8 sm:p-12 shadow-2xl shadow-black/80 text-[#FAF7F2]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-16 left-1/2 -translate-x-1/2 size-40 rounded-full bg-[#B47A46]/15 blur-2xl"
        />

        {/* Top Gold Badge */}
        <span className="inline-flex items-center gap-1.5 rounded-full border border-[#D4AF37]/40 bg-black/60 px-3.5 py-1 text-xs font-semibold text-[#D4AF37]">
          ✦ 404 ERROR · PAGE NOT FOUND ✦
        </span>

        {/* 404 Large Heading */}
        <h1 className="mt-5 font-display text-7xl font-normal tracking-tight text-[#FAF7F2]">
          4<span className="text-[#D4AF37]">0</span>4
        </h1>

        <p className="mt-2 font-gurmukhi text-base text-[#D4AF37]">
          ਮੁਆਫ਼ ਕਰਨਾ, ਇਹ ਪੰਨਾ ਨਹੀਂ ਮਿਲਿਆ।
        </p>

        <h2 className="mt-3 font-display text-xl sm:text-2xl text-[#FAF7F2]">
          Looks Like This Dish Isn't on the Menu
        </h2>

        <p className="mt-3 text-xs sm:text-sm text-[#C4B9AD] leading-relaxed max-w-md mx-auto">
          The page you requested doesn't exist or has moved. Let's take you back to our royal tandoori feast or help you explore our authentic dishes.
        </p>

        {/* Quick Recovery CTAs */}
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            to="/"
            className="luxury-shimmer inline-flex items-center gap-2 rounded-full bg-[#B47A46] hover:bg-[#C88B54] hover:shadow-[0_0_20px_rgba(212,175,55,0.35)] px-6 py-3 text-xs font-bold uppercase tracking-wider text-[#FAF7F2] shadow-lg shadow-[#B47A46]/20 hover:scale-105 active:scale-95 transition-all"
          >
            <HomeIcon className="size-3.5" />
            <span>Return to Home</span>
          </Link>
          <Link
            to="/menu"
            className="inline-flex items-center gap-2 rounded-full border border-[#B47A46]/40 bg-[#24201D] px-6 py-3 text-xs font-semibold text-[#FAF7F2] hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all"
          >
            <UtensilsCrossed className="size-3.5 text-[#D4AF37]" />
            <span>Browse Full Menu</span>
          </Link>
          <a
            href={site.phoneHref}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/60 px-5 py-3 text-xs font-medium text-[#C4B9AD] hover:text-white transition-all"
          >
            <Phone className="size-3 text-[#D4AF37]" />
            <span>Call: {site.phone}</span>
          </a>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-[65vh] items-center justify-center bg-[#FAF7F2] px-4 py-16 text-center text-[#1C1917]">
      <div className="max-w-md rounded-3xl border border-[#B47A46]/20 bg-[#1C1917] p-8 shadow-2xl text-[#FAF7F2]">
        <h1 className="font-display text-2xl text-[#FAF7F2]">This page encountered an issue</h1>
        <p className="mt-3 text-xs sm:text-sm text-[#C4B9AD]">
          Something went wrong on our end. You can try refreshing or head back to the restaurant home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="luxury-shimmer inline-flex items-center justify-center rounded-full bg-[#B47A46] hover:bg-[#C88B54] hover:shadow-[0_0_20px_rgba(212,175,55,0.35)] px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#FAF7F2] transition-all hover:scale-105"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-full border border-[#B47A46]/40 bg-[#24201D] px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#FAF7F2] transition-colors hover:border-[#D4AF37] hover:text-[#D4AF37]"
          >
            Return Home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1, viewport-fit=cover" },
      { name: "theme-color", content: "#1C1917" },
      { title: "Dawat Restaurant & SKY Lounge — North Indian Restaurant in Mukerian" },
      {
        name: "description",
        content:
          "Dawat Restaurant & SKY Lounge on G.T. Road, Mukerian. Authentic Punjabi food, clay tandoori breads, copper handi curries, and official SKY Lounge bar.",
      },
      { property: "og:site_name", content: "Dawat Restaurant & SKY Lounge" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "/hero-spread.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "/hero-spread.jpg" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Marcellus&family=Jost:wght@300;400;500;600;700&family=Noto+Sans+Gurmukhi:wght@400;500;600;700&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <HeadContent />
      </head>
      <body className="bg-[#1C1917] text-[#F5EFE6] antialiased">
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <div className="flex min-h-screen flex-col overflow-x-clip">
          <Header />
          <main className="flex-1">
            {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
            <Outlet />
          </main>
          <Footer />
          <MobileActionBar />
          <FloatingWhatsApp />
        </div>
        <Toaster position="top-center" />
      </LanguageProvider>
    </QueryClientProvider>
  );
}
