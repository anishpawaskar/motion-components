import React from 'react';
import { ScreenWrapper } from '../common/screen-wrapper';
import { cn } from '@/lib/utils';

export const DotsBackground = () => {
    return (
        <ScreenWrapper>
            <div
                className={cn(
                    'flex size-full items-center justify-center',
                    'bg-[radial-gradient(circle_at_1px_1px,var(--color-neutral-300)_1px,transparent_1px)] mask-radial-from-50% bg-size-[8px_8px]'
                )}
            >
                <h1 className="text-4xl font-semibold">Dots Background</h1>
            </div>
        </ScreenWrapper>
    );
};
