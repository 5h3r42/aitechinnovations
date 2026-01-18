import { cn } from "@/lib/utils";
import React from "react";

export const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "rounded-2xl border border-muted-text/20 bg-background/50 p-6 shadow-sm backdrop-blur-sm transition-all hover:border-accent/40",
          className
        )}
        {...props}
      />
    );
  }
);

Card.displayName = "Card";
