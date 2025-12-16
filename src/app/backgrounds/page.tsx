import { BoxsBackground } from '@/components/(backgrounds)/boxs';
import { DotsBackground } from '@/components/(backgrounds)/dots';
import React from 'react';

const Backgrounds = () => {
    return (
        <div className="min-h-screen">
            <DotsBackground />
            <BoxsBackground />
        </div>
    );
};

export default Backgrounds;
