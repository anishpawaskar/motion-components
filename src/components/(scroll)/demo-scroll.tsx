'use client';

import React, { useState } from 'react';
import { useMotionValueEvent, useScroll, motion } from 'motion/react';

export const DemoScroll = () => {
    const [isCrossed, setIsCrossed] = useState(false);
    const { scrollYProgress } = useScroll();

    useMotionValueEvent(scrollYProgress, 'change', (current) => {
        const diff = current > 0.05 ? true : false;
        setIsCrossed(diff);
    });

    const headerVariant = {
        inView: {
            top: 0,
        },
        passed: {
            top: 20,
        },
    };

    const navVariant = {
        inview: {
            width: '100%',
        },
        passed: {
            width: '80%',
            borderRadius: '56px',
        },
    };

    return (
        <>
            <motion.header
                variants={headerVariant}
                initial="inView"
                animate={isCrossed ? 'passed' : 'inView'}
                className="fixed inset-x-0 top-0"
            >
                <motion.nav
                    variants={navVariant}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="mx-auto flex items-center justify-between bg-neutral-800 px-10 py-4 text-white"
                >
                    <p className="text-lg font-semibold">Demo</p>
                    <button className="flex h-8 items-center justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-neutral-800">
                        Login
                    </button>
                </motion.nav>
            </motion.header>
            <div className="flex flex-col">
                {Array.from({ length: 10 }, (_, idx) => idx + 1).map((item) => {
                    return (
                        <div
                            key={item}
                            className="flex h-screen w-full items-center justify-center"
                        >
                            <h3 className="text-2xl font-semibold">{item}</h3>
                        </div>
                    );
                })}
            </div>
        </>
    );
};
