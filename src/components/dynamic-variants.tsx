'use client';

import React from 'react';
import { ScreenWrapper } from './common/screen-wrapper';
import { motion } from 'motion/react';

const itemVariant = {
    hidden: {
        opacity: 0,
        y: 20,
    },
    visible: (item: number) => {
        return {
            opacity: 1,
            y: 0,
            transition: {
                delay: item * 0.3,
            },
        };
    },
};

export const DynamicVariants = () => {
    return (
        <ScreenWrapper>
            <div className="w-full min-w-3xl p-5">
                <motion.ul
                    initial={'hidden'}
                    animate={'visible'}
                    className="grid grid-cols-1 gap-4 md:grid-cols-3"
                >
                    {Array.from({ length: 3 }, (_, idx) => idx + 1).map(
                        (item, idx) => {
                            return (
                                <motion.li
                                    key={item}
                                    custom={idx}
                                    variants={itemVariant}
                                    className="h-20 w-full rounded-md bg-cyan-400"
                                ></motion.li>
                            );
                        }
                    )}
                </motion.ul>
            </div>
        </ScreenWrapper>
    );
};
