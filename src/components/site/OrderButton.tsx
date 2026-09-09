import { toast } from "sonner";
import { cn } from "@/lib/utils";
import { site } from "@/lib/site";

/**
 * Online ordering destination is not supplied yet ([ORDER ONLINE LINK]).
 * Until it is, this button tells visitors how to order by phone instead of
 * pointing at an invented URL.
 */
export function OrderButton({
  className,
  size = "md",
  variant = "solid",
  label = "Order Online",
}: {
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?: "solid" | "outline" | "gold";
  label?: string;
}) {
  return (
    <button
      type="button"
      onClick={() =>
        toast("Online ordering link coming soon", {
          description: `Call ${site.phone} to place a takeaway or delivery order.`,
        })
      }
      className={cn(
        "inline-flex items-center justify-center font-medium tracking-wide uppercase transition-colors focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:outline-none",
        size === "sm" && "px-4 py-2 text-xs",
        size === "md" && "px-6 py-3 text-sm",
        size === "lg" && "px-8 py-4 text-sm",
        variant === "solid" && "bg-primary text-primary-foreground hover:bg-primary/90 rounded-md",
        variant === "gold" &&
          "bg-gradient-to-r from-[#D49B55] via-[#E5B869] to-[#C08845] text-stone-950 font-bold hover:scale-105 active:scale-95 shadow-lg shadow-[#D49B55]/25 border-0 rounded-full",
        variant === "outline" &&
          "border border-ivory/40 text-ivory hover:border-accent hover:text-accent rounded-md",
        className,
      )}
    >
      {label}
    </button>
  );
}
