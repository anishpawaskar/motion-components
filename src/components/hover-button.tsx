'use client'

import React from 'react'
import { ScreenWrapper } from './common/screen-wrapper'
import { cn } from '@/lib/utils'
import { motion } from 'motion/react'

export const HoverButton = () => {
    return (
        <ScreenWrapper
            className={cn('bg-neutral-900')}
            style={{
                backgroundImage:
                    'radial-gradient(circle at 0.5px 0.5px, var(--color-neutral-600) 0.5px, transparent 0)',
                backgroundSize: '8px 8px',
                backgroundRepeat: 'repeat',
            }}
        >
            <motion.button
                whileHover={{
                    rotateX: 25,
                    rotateY: 10,
                    boxShadow: '0px 20px 50px rgba(8,122,184,0.7)',
                    y: -5,
                }}
                whileTap={{
                    y: 0,
                    rotateX: 0,
                    rotateY: 0,
                    boxShadow: 'none',
                }}
                style={{
                    translateZ: 100,
                }}
                transition={{
                    duration: 0.3,
                    ease: 'easeInOut',
                }}
                className="group relative rounded-md bg-black px-6 py-2 text-sm text-neutral-400 shadow-[0_1px_4px_0px_rgba(255,255,255,0.1)_inset,0_-1px_4px_0px_rgba(255,255,255,0.1)_inset] perspective-dramatic"
            >
                <span className="transition-colors duration-300 group-hover:text-cyan-500">
                    Subscribe
                </span>
                <span className="absolute inset-x-0 bottom-px mx-auto h-px w-3/4 bg-linear-to-r from-transparent via-cyan-500 to-transparent"></span>
                <span className="absolute inset-x-0 bottom-px h-1 bg-linear-to-r from-transparent via-cyan-500 to-transparent opacity-0 blur-sm transition-opacity duration-300 group-hover:opacity-100"></span>
            </motion.button>
        </ScreenWrapper>
    )
}
