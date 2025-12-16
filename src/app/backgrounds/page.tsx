import { BoxsBackground } from '@/components/(backgrounds)/boxs';
import { DotsBackground } from '@/components/(backgrounds)/dots';
import { InfiniteCircleBackground } from '@/components/(backgrounds)/infinte-circle';
import { SkewedLinesBackground } from '@/components/(backgrounds)/skewed-lines';
import React from 'react';

const Backgrounds = () => {
    return (
        <div className="min-h-screen">
            <DotsBackground />
            <BoxsBackground />
            <SkewedLinesBackground />
            <InfiniteCircleBackground />
        </div>
    );
};

export default Backgrounds;
