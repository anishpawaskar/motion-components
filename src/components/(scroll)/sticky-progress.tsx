'use client';

import { useScroll, motion } from 'motion/react';
import React, { useRef } from 'react';

export const StickyProgressCard = () => {
    return (
        <>
            {Array.from({ length: 8 }, (_, idx) => idx + 1).map((item) => {
                return <ProgressCard key={item} />;
            })}
        </>
    );
};

const ProgressCard = () => {
    const cardRef = useRef<HTMLDivElement | null>(null);

    const { scrollYProgress } = useScroll({
        target: cardRef,
        offset: ['end end', 'start start'],
    });

    return (
        <div className="flex h-screen items-center justify-center">
            <div ref={cardRef} className="flex gap-5">
                <div>
                    <motion.div
                        style={{
                            scale: scrollYProgress,
                        }}
                        className="sticky top-0 size-20 rounded-full bg-yellow-400"
                    />
                </div>
                <div className="h-[400px] w-xs rounded-md border-2 border-dotted border-pink-500"></div>
            </div>
        </div>
    );
};
