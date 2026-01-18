import { cn } from "@/lib/utils";
import React from "react";

export const Container = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("mx-auto max-w-[1200px] px-6 md:px-8", className)}
        {...props}
      />
    );
  }
);

Container.displayName = "Container";
