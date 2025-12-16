import React from 'react';
import { ScreenWrapper } from '../common/screen-wrapper';
import { cn } from '@/lib/utils';

export const BoxsBackground = () => {
    return (
        <ScreenWrapper>
            <div
                className={cn(
                    'flex size-full items-center justify-center',
                    'bg-[linear-gradient(to_right,var(--color-neutral-200)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-neutral-200)_1px,transparent_1px)] mask-radial-from-50% bg-size-[32px_32px]'
                )}
            >
                <h1 className="text-4xl font-semibold">Boxes background</h1>
            </div>
        </ScreenWrapper>
    );
};
