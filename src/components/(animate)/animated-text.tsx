'use client';

import { cn } from '@/lib/utils';
import React, { useEffect } from 'react';
import { motion, stagger, useAnimate } from 'motion/react';

export const AnimatedText = () => {
    const [scope, animate] = useAnimate();

    const text =
        'A collection of smooth, high-quality animated icons for your next project. Copy and paste directly into your app.';

    useEffect(() => {
        const startAnimation = () => {
            animate(
                'span',
                {
                    opacity: 1,
                    filter: 'blur(0px)',
                    y: 0,
                },
                {
                    duration: 0.2,
                    ease: 'easeOut',
                    delay: stagger(0.15),
                }
            );
        };

        setTimeout(() => {
            startAnimation();
        }, 500);
    }, []);

    return (
        <div className="flex h-screen items-center justify-center">
            <div className="flex h-full w-full max-w-4xl flex-col justify-center">
                <motion.h1
                    initial={{
                        opacity: 0,
                        y: 10,
                        filter: 'blur(2px)',
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                        filter: 'blur(0px)',
                    }}
                    transition={{
                        duration: 0.5,
                        ease: 'easeInOut',
                    }}
                    className={cn(
                        'mx-auto w-full max-w-2xl text-center text-5xl font-bold tracking-tighter',
                        'bg-linear-to-b from-neutral-400 via-neutral-500 to-neutral-300 bg-clip-text text-transparent text-shadow-sm'
                    )}
                >
                    Static Icons feel dead now
                </motion.h1>
                <motion.p
                    ref={scope}
                    className="mx-auto mt-4 max-w-xl text-center text-base text-neutral-500"
                >
                    {text.split(' ').map((word, index) => {
                        return (
                            <React.Fragment key={`${word}-${index}`}>
                                {word === 'Copy' && <br />}
                                <motion.span
                                    className="inline-block"
                                    style={{
                                        opacity: 0,
                                        y: 6,
                                        filter: 'blur(px)',
                                    }}
                                >
                                    {word}
                                </motion.span>{' '}
                            </React.Fragment>
                        );
                    })}
                </motion.p>
            </div>
        </div>
    );
};
