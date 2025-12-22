import { Poketab } from '@/components/(layouts)/poketab';
import { Tabs } from '@/components/(layouts)/tabs';
import React from 'react';

const LayoutsPage = () => {
    return (
        <div className="min-h-screen">
            <Tabs />
            <Poketab />
        </div>
    );
};

export default LayoutsPage;
