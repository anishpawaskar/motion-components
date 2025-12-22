'use client';

import React, { useState } from 'react';
import { ScreenWrapper } from '../common/screen-wrapper';
import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'motion/react';

type PokemonType = {
    name: string;
    imgUrl: string;
};

const POKEMONS: PokemonType[] = [
    { name: 'Eevee', imgUrl: '/eevee.avif' },
    { name: 'Lapras', imgUrl: '/lapras.avif' },
    { name: 'Gyarados', imgUrl: '/gyarados.avif' },
];

export const Poketab = () => {
    const [activeTab, setActiveTab] = useState<PokemonType>(POKEMONS[0]);

    let color;

    switch (activeTab.name) {
        case 'Eevee': {
            color = 'bg-yellow-400';

            break;
        }

        case 'Lapras': {
            color = 'bg-sky-400';
            break;
        }

        case 'Gyarados': {
            color = 'bg-red-400';
            break;
        }
    }

    return (
        <ScreenWrapper>
            <div className="w-full max-w-2xl rounded-lg border border-neutral-200 p-4 shadow-sm">
                <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
                <div className="flex items-center justify-center p-10">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab ? activeTab.name : 'empty'} // NOTE: Key tell react to remount this component
                            initial={{
                                y: 10,
                                opacity: 0,
                            }}
                            animate={{
                                y: 0,
                                opacity: 1,
                            }}
                            exit={{
                                y: -10,
                                opacity: 0,
                            }}
                            transition={{
                                duration: 0.2,
                                ease: 'easeInOut',
                            }}
                            className={cn('size-32 rounded-md', color)}
                        ></motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </ScreenWrapper>
    );
};

const Tabs = ({
    activeTab,
    setActiveTab,
}: {
    activeTab: PokemonType;
    setActiveTab: React.Dispatch<React.SetStateAction<PokemonType>>;
}) => {
    return (
        <div className="grid grid-cols-3">
            {POKEMONS.map((pokemon: PokemonType) => {
                const isActive = activeTab.name === pokemon.name;

                return (
                    <button
                        key={pokemon.name}
                        className={cn(
                            'relative flex h-10 items-center justify-center rounded-tl-md rounded-tr-md px-3 py-2',
                            isActive && 'bg-neutral-100 text-neutral-800'
                        )}
                        onClick={() => setActiveTab(pokemon)}
                    >
                        {pokemon.name}
                        {isActive && (
                            <motion.span
                                layoutId="underline"
                                className="absolute inset-x-0 -bottom-px h-0.5 bg-sky-500"
                            ></motion.span>
                        )}
                    </button>
                );
            })}
        </div>
    );
};
