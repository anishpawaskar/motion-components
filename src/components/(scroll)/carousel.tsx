'use client';

import React, { useRef } from 'react';
import { ScreenWrapper } from '../common/screen-wrapper';
import {
    useScroll,
    motion,
    useMotionValueEvent,
    useMotionValue,
} from 'motion/react';

export const Carousel = () => {
    const carouselRef = useRef<HTMLDivElement | null>(null);
    const { scrollXProgress } = useScroll({
        container: carouselRef,
    });

    const maskBg = useMotionValue(
        'linear-gradient(to right,transparent,transparent,var(--color-neutral-300))'
    );

    useMotionValueEvent(scrollXProgress, 'change', (current) => {
        if (current === 0) {
            maskBg.set(
                'linear-gradient(to right,transparent,transparent,var(--color-neutral-300))'
            );
        } else if (current === 1) {
            maskBg.set(
                'linear-gradient(to left,transparent,transparent,var(--color-neutral-300))'
            );
        } else if (current > 0 || current < 1) {
            maskBg.set(
                'linear-gradient(to right,var(--color-neutral-300),transparent,transparent,var(--color-neutral-300))'
            );
        }
    });

    return (
        <ScreenWrapper>
            <div className="relative">
                <motion.div
                    style={{
                        background: maskBg,
                    }}
                    transition={{
                        duration: 0.5,
                        ease: 'easeInOut',
                    }}
                    ref={carouselRef}
                    className="flex w-full max-w-xl items-center gap-5 overflow-x-auto py-5"
                >
                    {Array.from({ length: 10 }, (_, idx) => idx + 1).map(
                        (item) => {
                            return (
                                <div
                                    key={item}
                                    className="flex h-64 w-3xs shrink-0 items-center justify-center rounded-md border border-neutral-300"
                                >
                                    <h3 className="text-2xl font-semibold">
                                        {item}
                                    </h3>
                                </div>
                            );
                        }
                    )}
                    <motion.div
                        style={{
                            scaleX: scrollXProgress,
                        }}
                        className="absolute inset-x-0 -top-1 z-10 h-2 origin-left bg-red-400"
                    />
                </motion.div>
            </div>
        </ScreenWrapper>
    );
};
