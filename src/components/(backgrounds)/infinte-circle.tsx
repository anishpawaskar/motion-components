import { ScreenWrapper } from '../common/screen-wrapper';
import { cn } from '@/lib/utils';

export const InfiniteCircleBackground = () => {
    return (
        <ScreenWrapper>
            <div
                className={cn(
                    'flex size-full items-center justify-center',
                    'bg-[repeating-radial-gradient(circle_at_center,var(--color-neutral-200)_0px,var(--color-neutral-200)_1px,transparent_1px,transparent_50px)]',
                    'mask-radial-from-50%'
                )}
            >
                <h1 className="text-4xl font-semibold">
                    Infinite Circle Background
                </h1>
            </div>
        </ScreenWrapper>
    );
};
