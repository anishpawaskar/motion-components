import { Playlists } from '@/components/(layouts)/playlists';
import { Poketab } from '@/components/(layouts)/poketab';
import { Tabs } from '@/components/(layouts)/tabs';
import React from 'react';

const LayoutsPage = () => {
    return (
        <div className="min-h-screen">
            <Tabs />
            <Poketab />
            <Playlists />
        </div>
    );
};

export default LayoutsPage;
