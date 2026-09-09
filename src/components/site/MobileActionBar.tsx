import { Link } from "@tanstack/react-router";
import { Phone, UtensilsCrossed } from "lucide-react";
import { site } from "@/lib/site";
import { OrderButton } from "./OrderButton";

export function MobileActionBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-3 border-t border-border bg-background/97 backdrop-blur lg:hidden">
      <a
        href={site.phoneHref}
        className="flex min-h-14 flex-col items-center justify-center gap-1 text-[11px] font-medium tracking-[0.12em] text-foreground uppercase"
      >
        <Phone className="size-4 text-primary" aria-hidden="true" />
        Call
      </a>
      <Link
        to="/menu"
        className="flex min-h-14 flex-col items-center justify-center gap-1 border-x border-border text-[11px] font-medium tracking-[0.12em] text-foreground uppercase"
      >
        <UtensilsCrossed className="size-4 text-primary" aria-hidden="true" />
        Menu
      </Link>
      <OrderButton size="sm" label="Order" className="min-h-14 rounded-none text-[11px]" />
    </div>
  );
}
