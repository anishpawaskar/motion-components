'use client';

import React from 'react';
import { ScreenWrapper } from './common/screen-wrapper';
import { motion } from 'motion/react';

export const ColorChangingBox = () => {
    const COLORS = [
        'var(--color-red-400)',
        'var(--color-yellow-400)',
        'var(--color-green-400)',
        'var(--color-red-400)',
    ];

    return (
        <ScreenWrapper>
            <motion.div
                animate={{
                    backgroundColor: COLORS,
                    scale: [1, 2, 2, 1, 1],
                    rotate: [0, 0, 180, 180, 0],
                    borderRadius: ['0%', '0%', '50%', '50%', '0%'],
                }}
                transition={{
                    duration: 2,
                    ease: 'easeInOut',
                    times: [0, 0.2, 0.5, 0.8, 1],
                    repeat: Infinity,
                    repeatDelay: 1,
                }}
                className="size-40"
            ></motion.div>
        </ScreenWrapper>
    );
};
