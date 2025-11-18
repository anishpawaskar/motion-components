import { cn } from "@/lib/utils";
import React from "react";

export const ScreenWrapper = ({
  children,
  className,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn("h-screen flex items-center justify-center", className)}
      {...props}
    >
      {children}
    </div>
  );
};
