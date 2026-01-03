'use client';

import { motion, useScroll, Variants } from 'motion/react';
import { useRef } from 'react';

const COLORS: string[] = [
    '#3B82F6', // Blue 500
    '#22C55E', // Green 500
    '#EF4444', // Red 500
    '#F97316', // Orange 500
    '#EAB308', // Yellow 500
    '#A855F7', // Purple 500
    '#EC4899', // Pink 500
    '#14B8A6', // Teal 500
    '#6366F1', // Indigo 500
    '#84CC16', // Lime 500
    '#06B6D4', // Cyan 500
    '#F59E0B', // Amber 500
];

const cardItemVariant: Variants = {
    offScreen: {
        y: 200,
    },
    onScreen: {
        y: 50,
        rotate: -10,
        transition: {
            type: 'spring',
            bounce: 0.4,
            duration: 0.8,
        },
    },
};

export const ScrollTriggeredCards = () => {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const { scrollYProgress } = useScroll({
        container: containerRef,
    });

    return (
        <motion.div ref={containerRef} className="h-screen overflow-y-auto p-5">
            <motion.div
                className="fixed inset-x-0 top-0 z-20 h-1 origin-left bg-neutral-700"
                style={{ scaleX: scrollYProgress }}
            />
            <div className="flex flex-col items-center gap-20">
                {COLORS.map((color) => {
                    return (
                        <motion.div
                            key={color}
                            initial="offScreen"
                            whileInView="onScreen"
                            style={{
                                background: color,
                            }}
                            viewport={{
                                amount: 1,
                            }}
                            className="relative h-40 w-xs overflow-hidden rounded-md"
                        >
                            <div className="absolute inset-0 z-10 flex -rotate-3 items-center justify-center">
                                <motion.div
                                    variants={cardItemVariant}
                                    className="h-96 w-1/2 rounded-lg border border-neutral-300 bg-white"
                                ></motion.div>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </motion.div>
    );
};
