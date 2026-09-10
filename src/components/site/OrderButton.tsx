import { ShoppingBag } from "lucide-react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import { site } from "@/lib/site";

export function OrderButton({
  className,
  size = "md",
  variant = "gold",
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
        toast("Online ordering via counter", {
          description: `Call ${site.phone} to place your hot takeaway or home delivery order.`,
        })
      }
      className={cn(
        "inline-flex items-center justify-center font-bold tracking-wider uppercase transition-all duration-300 focus-visible:outline-none cursor-pointer",
        size === "sm" && "px-4 py-2 text-xs gap-1.5",
        size === "md" && "px-6 py-3 text-xs sm:text-sm gap-2",
        size === "lg" && "px-8 py-4 text-sm gap-2.5",
        variant === "solid" && "bg-[#A87545] text-[#F5EFE6] hover:bg-[#B98350] rounded-full shadow-md",
        variant === "gold" &&
          "bg-gradient-to-r from-[#A87545] via-[#B98350] to-[#A87545] hover:shadow-[0_0_20px_rgba(200,168,117,0.40)] active:scale-95 shadow-lg shadow-[#A87545]/25 border border-[#C8A875]/40 text-[#F5EFE6] rounded-full",
        variant === "outline" &&
          "border border-[#A87545]/40 bg-[#241B16] text-[#F5EFE6] hover:border-[#C8A875] hover:text-[#C8A875] rounded-full shadow-sm",
        className
      )}
    >
      <ShoppingBag className={cn(size === "sm" ? "size-3.5" : "size-4")} />
      <span>{label}</span>
    </button>
  );
}
