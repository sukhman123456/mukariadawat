import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-[#A87545] text-[#F5EFE6] font-semibold shadow-md hover:bg-[#B98350] hover:shadow-[0_0_20px_rgba(200,168,117,0.40)] active:scale-[0.98] transition-all",
        destructive:
          "bg-[#8B2626] text-[#F5EFE6] border border-[#6F1D1D]/60 shadow-sm hover:bg-[#A32D2D] hover:shadow-[0_0_15px_rgba(139,38,38,0.4)] transition-all",
        outline:
          "border border-[#A87545]/40 bg-transparent text-[#F5EFE6] shadow-sm hover:border-[#C8A875] hover:bg-[#A87545]/15 hover:text-[#C8A875] hover:shadow-[0_0_15px_rgba(200,168,117,0.2)] transition-all",
        secondary:
          "border border-[#A87545]/25 bg-[#241B16] text-[#F5EFE6] shadow-sm hover:border-[#C8A875] hover:bg-[#A87545]/15 hover:text-[#C8A875] hover:shadow-[0_0_15px_rgba(200,168,117,0.2)] transition-all",
        ghost: "text-[#F5EFE6] hover:bg-[#A87545]/10 hover:text-[#C8A875] transition-all",
        link: "text-[#A87545] underline-offset-4 hover:underline hover:text-[#C8A875] transition-colors",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
