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
                }}
                transition={{
                    duration: 2,
                    ease: 'linear',
                    repeat: Infinity,
                }}
                className="size-40 rounded-md"
            ></motion.div>
        </ScreenWrapper>
    );
};
