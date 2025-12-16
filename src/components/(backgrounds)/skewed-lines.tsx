import React from 'react';
import { ScreenWrapper } from '../common/screen-wrapper';
import { cn } from '@/lib/utils';

export const SkewedLinesBackground = () => {
    return (
        <ScreenWrapper>
            <div
                className={cn(
                    'flex size-full items-center justify-center',
                    'bg-[repeating-linear-gradient(138deg,var(--color-neutral-200)_0px,var(--color-neutral-200)_1px,transparent_1px,transparent_16px)]'
                )}
            >
                <h1 className="text-4xl font-semibold">Skewed lines</h1>
            </div>
        </ScreenWrapper>
    );
};
