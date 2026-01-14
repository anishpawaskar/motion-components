import { Carousel } from '@/components/(scroll)/carousel';
import { DemoScroll } from '@/components/(scroll)/demo-scroll';
import { ScrollTriggeredCards } from '@/components/(scroll)/scroll-triggered-cards';
import { StickyProgressCard } from '@/components/(scroll)/sticky-progress';
import React from 'react';

const ScrollPage = () => {
    return (
        <div className="min-h-screen">
            {/* <ScrollTriggeredCards /> */}
            {/* <DemoScroll /> */}
            {/* <Carousel /> */}
            <StickyProgressCard />
        </div>
    );
};

export default ScrollPage;
