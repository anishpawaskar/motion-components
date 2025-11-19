"use client";

import React, { useState } from "react";
import { ScreenWrapper } from "./common/screen-wrapper";
import {
  CheckCircle,
  Clock,
  PlusIcon,
  RotateCwIcon,
  XIcon,
  Zap,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

export const AceternityCard = () => {
  const [isHovered, setHovered] = useState(false);
  const [open, setOpen] = useState(true);
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
      <div className="relative w-[320px] min-h-[200px]">
        <AnimatePresence>
          {open ? (
            <motion.div
              key={"card"}
              initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, scale: 0.9, filter: "blur(0px)" }}
              transition={{
                duration: 0.3,
                ease: "easeInOut",
              }}
              className="bg-white p-4 rounded-lg w-full shadow-sm gap-4 flex flex-col"
            >
              <div>
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">Aceternity</h3>
                  <button
                    onClick={() => setOpen(false)}
                    className="size-4 flex items-center justify-center"
                  >
                    <XIcon className="opacity-50" />
                  </button>
                </div>
                <p className="text-neutral-500 text-sm">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Quod, animi?
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
                          <div
                            key={item.id}
                            className="px-3 flex gap-4 items-center"
                          >
                            <IconComponent className="shrink-0 opacity-40" />
                            <div className="flex-1">
                              <p className="text-sm font-semibold">
                                {item.title}
                              </p>
                              <p className="text-sm text-neutral-500">
                                {item.small}
                              </p>
                            </div>
                          </div>
                        );
                      })}
                      <div className="flex px-3 gap-2 items-center justify-center">
                        <PlusIcon className="opacity-50" />
                        <p className="text-sm font-semibold">
                          Create the future
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ) : (
            <motion.button
              initial={{
                opacity: 0,
                scale: 0.9,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                scale: 0.9,
              }}
              transition={{
                duration: 0.3,
                ease: "easeInOut",
              }}
              key={"reset-btn"}
              className="absolute top-1/2 left-1/2 -translate-1/2 text-sm font-semibold bg-neutral-700 rounded-md px-4 py-2 h-8 flex items-center justify-center text-white shadow-md gap-2"
              onClick={() => setOpen(true)}
            >
              <RotateCwIcon size={16} />
              Reset
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </ScreenWrapper>
  );
};
