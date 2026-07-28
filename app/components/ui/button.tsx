import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

/**
 * shadcn/ui Button, with variants mapped onto this project's own design
 * tokens (brand / accent / whatsapp) rather than shadcn's default palette.
 */
const buttonVariants = cva(
  "inline-flex shrink-0 items-center justify-center gap-2.5 rounded-xl text-base font-semibold whitespace-nowrap transition-colors outline-none focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-accent-500 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-5 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        whatsapp:
          "bg-whatsapp text-white shadow-lg shadow-whatsapp/20 hover:bg-whatsapp-dark",
        accent: "bg-accent-500 text-brand-900 hover:bg-accent-400 dark:text-brand-950",
        // Ghost button for use on the dark hero backdrop.
        outlineLight:
          "border border-white/20 text-white hover:border-white/40 hover:bg-white/5 dark:border-border dark:text-foreground dark:hover:bg-muted/70",
        outline:
          "border border-border text-foreground hover:border-brand-600 hover:bg-muted/70",
      },
      size: {
        default: "min-h-[52px] px-7",
        lg: "min-h-[56px] px-6",
        full: "min-h-[56px] w-full px-6",
        // Header button. Square on mobile where the label is hidden.
        sm: "h-10 gap-2 rounded-lg px-3 text-sm sm:px-4 [&_svg]:size-4",
      },
    },
    defaultVariants: {
      variant: "whatsapp",
      size: "default",
    },
  },
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
