'use client';

import React from 'react';
import { ScreenWrapper } from './common/screen-wrapper';
import { motion } from 'motion/react';

export const WildcardKeyframe = () => {
    return (
        <ScreenWrapper>
            <motion.div
                whileHover={{
                    scale: [null, 1.1, 1.6],
                    transition: {
                        duration: 0.5,
                        times: [0, 0.6, 1],
                        ease: ['easeInOut', 'easeOut'],
                    },
                }}
                transition={{
                    duration: 0.3,
                    ease: 'easeOut',
                }}
                className="size-40 rounded-md bg-cyan-400"
            ></motion.div>
        </ScreenWrapper>
    );
};
