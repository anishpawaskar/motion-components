'use client';

import React, { useState } from 'react';
import { ScreenWrapper } from './common/screen-wrapper';
import { motion } from 'motion/react';
import { XIcon } from 'lucide-react';

export const ToggleBtn = () => {
    const [isOn, setIsOn] = useState(false);
    const [boxes, setBoxes] = useState(() => {
        return Array.from({ length: 3 }, (_, idx) => idx + 1);
    });

    return (
        <ScreenWrapper>
            <div className="flex flex-col items-center gap-4">
                <motion.button
                    layout
                    style={{
                        justifyContent: isOn ? 'end' : 'start',
                    }}
                    onClick={() => setIsOn((prevState) => !prevState)}
                    className="flex h-10 w-20 items-center rounded-[50px] border border-neutral-100 bg-neutral-200 p-1.5"
                >
                    <motion.span
                        animate={{
                            backgroundColor: isOn
                                ? 'var(--color-green-400)'
                                : 'var(--color-neutral-500)',
                        }}
                        className="inline-block h-full w-10 rounded-full bg-neutral-500"
                    ></motion.span>
                </motion.button>
                <motion.div className="flex items-center gap-4">
                    {boxes.map((box) => {
                        const handleRemoveBox = () => {
                            const filteredBoxes = boxes.filter(
                                (prevBox) => prevBox !== box
                            );
                            setBoxes(filteredBoxes);
                        };

                        return (
                            <motion.div
                                layout
                                key={box}
                                className="relative flex size-20 items-center justify-center rounded-md bg-cyan-400"
                            >
                                <span>{box}</span>
                                <button
                                    onClick={handleRemoveBox}
                                    className="absolute -top-2 -right-2 flex size-4 items-center justify-center rounded-full bg-neutral-400"
                                >
                                    <XIcon size={12} className="text-white" />
                                </button>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </ScreenWrapper>
    );
};
