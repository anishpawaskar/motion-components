'use client';

import React, { useState } from 'react';
import { ScreenWrapper } from '../common/screen-wrapper';
import { cn } from '@/lib/utils';
import { motion } from 'motion/react';

export const Tabs = () => {
    const TABS = ['Home', 'About', 'Profile', 'About us'];

    const [activeTab, setActiveTab] = useState(TABS[0]);

    return (
        <ScreenWrapper>
            <div className="flex items-center gap-2 rounded-md bg-neutral-200 p-1">
                {TABS.map((tab) => {
                    const isActive = tab === activeTab;

                    return (
                        <button
                            key={tab}
                            className={cn(
                                'relative flex h-8 items-center justify-center rounded-md px-3 py-2 text-sm font-semibold',
                                !isActive &&
                                    'hover:bg-neutral-800 hover:text-neutral-200',
                                isActive && 'text-neutral-200'
                            )}
                            onClick={() => setActiveTab(tab)}
                        >
                            <span className="relative z-10">{tab}</span>
                            {isActive && (
                                <motion.span
                                    layoutId="tab"
                                    className="absolute inset-x-0 z-1 h-full rounded-md bg-neutral-800"
                                ></motion.span>
                            )}
                        </button>
                    );
                })}
            </div>
        </ScreenWrapper>
    );
};
