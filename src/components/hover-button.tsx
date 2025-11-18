"use client";

import React from "react";
import { ScreenWrapper } from "./common/screen-wrapper";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";

export const HoverButton = () => {
  return (
    <ScreenWrapper
      className={cn("bg-neutral-900")}
      style={{
        backgroundImage:
          "radial-gradient(circle at 0.5px 0.5px, var(--color-neutral-600) 0.5px, transparent 0)",
        backgroundSize: "8px 8px",
        backgroundRepeat: "repeat",
      }}
    >
      <motion.button
        whileHover={{
          rotateX: 25,
          rotateY: 10,
          boxShadow: "0px 20px 50px rgba(8,122,184,0.7)",
          y: -5,
        }}
        whileTap={{
          y: 0,
          rotateX: 0,
          rotateY: 0,
          boxShadow: "none",
        }}
        style={{
          translateZ: 100,
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
        className="px-6 py-2 rounded-md bg-black text-neutral-400 relative shadow-[0_1px_4px_0px_rgba(255,255,255,0.1)_inset,0_-1px_4px_0px_rgba(255,255,255,0.1)_inset] group perspective-dramatic text-sm"
      >
        <span className="group-hover:text-cyan-500 transition-colors duration-300">
          Subscribe
        </span>
        <span className="absolute inset-x-0 h-px bottom-px bg-linear-to-r from-transparent via-cyan-500 to-transparent w-3/4 mx-auto"></span>
        <span className="absolute inset-x-0 h-1 blur-sm bottom-px bg-linear-to-r from-transparent via-cyan-500 to-transparent group-hover:opacity-100 opacity-0 transition-opacity duration-300"></span>
      </motion.button>
    </ScreenWrapper>
  );
};
