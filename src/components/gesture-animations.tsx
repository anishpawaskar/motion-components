'use client';

import React from 'react';
import { ScreenWrapper } from './common/screen-wrapper';
import { motion } from 'motion/react';
import { ChevronLeftIcon } from 'lucide-react';

export const GestureAnimations = () => {
    return (
        <ScreenWrapper>
            <div className="flex size-full flex-col gap-4 p-10">
                <h1 className="shrink-0 text-4xl font-semibold">
                    Gesture Animations
                </h1>
                <div className="flex flex-1 items-center justify-center">
                    <motion.button
                        initial={{
                            opacity: 0,
                        }}
                        whileHover={{
                            backgroundColor: 'var(--color-neutral-200)',
                            scale: 1.1,
                        }}
                        whileTap={{
                            scale: 0.98,
                            backgroundColor: 'var(--color-neutral-300)',
                        }}
                        whileInView={{
                            opacity: 1,
                        }}
                        className="inline-flex h-9 items-center justify-center gap-1.5 rounded-md px-2 py-1"
                    >
                        <ChevronLeftIcon size={18} />
                        <span>Back</span>
                    </motion.button>
                </div>
            </div>
        </ScreenWrapper>
    );
};
