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
                    scale: [0.9, 1.1, 1.1, 0.9],
                    rotate: [0, 360, 360, 0],
                    borderRadius: ['0%', '50%', '50%', '0%'],
                }}
                transition={{
                    duration: 2,
                    ease: 'linear',
                    repeat: Infinity,
                    times: [0, 0.5, 0.75, 1],
                }}
                className="size-40"
            ></motion.div>
        </ScreenWrapper>
    );
};
