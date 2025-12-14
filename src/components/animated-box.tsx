'use client';

import React, { useState } from 'react';
import { ScreenWrapper } from './common/screen-wrapper';
import { motion } from 'motion/react';

export const AnimatedBox = () => {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    const [rotate, setRotate] = useState(0);

    return (
        <ScreenWrapper>
            <div className="grid w-full max-w-5xl grid-cols-2 p-10">
                <Box x={x} y={y} rotate={rotate} />
                <div className="flex flex-col items-center justify-center gap-4">
                    <Input label="X" value={x} onChange={setX} />
                    <Input label="Y" value={y} onChange={setY} />
                    <Input
                        label="Rotate"
                        value={rotate}
                        min={0}
                        max={360}
                        onChange={setRotate}
                    />
                </div>
            </div>
        </ScreenWrapper>
    );
};

type BoxProps = {
    x: number;
    y: number;
    rotate: number;
};

const Box = ({ x, y, rotate }: BoxProps) => {
    return (
        <div className="flex items-center justify-center">
            <motion.div
                initial={false}
                animate={{ x, y, rotate }}
                className="size-40 rounded-md border border-dotted border-neutral-700"
            ></motion.div>
        </div>
    );
};

type InputProps = {
    label: string;
    value: number;
    onChange: (newValue: number) => void;
    max?: number;
    min?: number;
};

const Input = ({
    label,
    value,
    onChange,
    max = 200,
    min = -200,
    ...props
}: InputProps) => {
    return (
        <label htmlFor="label">
            <code>{label}</code>
            <input
                type="range"
                max={max}
                min={min}
                value={value}
                onChange={(e) => onChange(parseFloat(e.target.value))}
                {...props}
            />
        </label>
    );
};
