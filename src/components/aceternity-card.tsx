"use client";

import React, { useState } from "react";
import { ScreenWrapper } from "./common/screen-wrapper";
import { CheckCircle, Clock, PlusIcon, Zap } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

export const AceternityCard = () => {
  const [isHovered, setHovered] = useState(false);
  const items = [
    {
      id: 1,
      title: "Fast performance",
      description:
        "Highly optimized rendering for smooth interactions and quick load times.",
      small: "No extra setup required",
      Icon: Zap,
    },
    {
      id: 2,
      title: "Reliable sync",
      description:
        "Automatic background syncing keeps data consistent across devices.",
      small: "Conflict-free merging",
      Icon: CheckCircle,
    },
    {
      id: 3,
      title: "Time-aware",
      description:
        "Timestamps, scheduling and utc-safe handling so you never miss a beat.",
      small: "UTC-first",
      Icon: Clock,
    },
  ];

  return (
    <ScreenWrapper className="bg-neutral-100">
      <motion.div
        initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
        }}
        className="bg-white p-4 rounded-lg w-[320px] shadow-sm gap-4 flex flex-col"
      >
        <div>
          <h3 className="text-lg font-semibold">Aceternity</h3>
          <p className="text-neutral-500 text-sm">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod,
            animi?
          </p>
        </div>
        <div
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className="w-full h-72 rounded-md border bg-neutral-100 border-neutral-200 overflow-hidden"
        >
          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{
                  scale: 0.95,
                  opacity: 0,
                  filter: "blur(10px)",
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  filter: "blur(0px)",
                }}
                exit={{
                  opacity: 0,
                  scale: 0.95,
                  filter: "blur(10px)",
                }}
                transition={{
                  duration: 0.3,
                  ease: "easeInOut",
                }}
                className="w-full h-full grid grid-rows-4 divide-y divide-neutral-200 bg-white"
              >
                {items.map((item) => {
                  const IconComponent = item.Icon;

                  return (
                    <div key={item.id} className="px-3 flex gap-4 items-center">
                      <IconComponent className="shrink-0 opacity-40" />
                      <div className="flex-1">
                        <p className="text-sm font-semibold">{item.title}</p>
                        <p className="text-sm text-neutral-500">{item.small}</p>
                      </div>
                    </div>
                  );
                })}
                <div className="flex px-3 gap-2 items-center justify-center">
                  <PlusIcon className="opacity-50" />
                  <p className="text-sm font-semibold">Create the future</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </ScreenWrapper>
  );
};
