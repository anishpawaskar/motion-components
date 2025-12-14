'use client';

import { ScreenWrapper } from './common/screen-wrapper';
import { cn } from '@/lib/utils';
import { motion, stagger } from 'motion/react';

export const AnimatedTextPage = () => {
    return (
        <ScreenWrapper>
            <AnimatedText text="Hello World" />
        </ScreenWrapper>
    );
};

type AnimatedTextProps = {
    text: string;
    className?: string;
};

const AnimatedText = ({
    text,

    className,
}: AnimatedTextProps) => {
    const charVariant = {
        hidden: {
            opacity: 0,
            y: 8,
        },
        visible: {
            opacity: 1,
            y: 0,
        },
    };

    return (
        <motion.p
            initial={'hidden'}
            animate={'visible'}
            transition={{
                delayChildren: stagger(0.1),
                duration: 300,
                ease: 'easeInOut',
            }}
            className={cn('text-lg font-semibold', className)}
        >
            {text.split('').map((char, idx) => {
                return (
                    <motion.span
                        key={idx}
                        variants={charVariant}
                        transition={{
                            ease: 'easeInOut',
                        }}
                        className="inline-block"
                    >
                        {char === ' ' ? '\u00A0' : char}
                    </motion.span>
                );
            })}
        </motion.p>
    );
};
