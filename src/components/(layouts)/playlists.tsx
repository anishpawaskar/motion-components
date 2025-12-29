'use client';

import React, { useState } from 'react';
import { ScreenWrapper } from '../common/screen-wrapper';
import Image from 'next/image';
import { AnimatePresence, motion } from 'motion/react';

export const Playlists = () => {
    const [activeSong, setActiveSong] = useState<SongType | null>(null);

    return (
        <ScreenWrapper>
            <div className="h-full w-full max-w-2xl p-4">
                <div className="flex flex-col gap-4">
                    {SONGS.map((song) => {
                        return (
                            <PlaylistCard
                                key={song.title}
                                song={song}
                                setActiveSong={setActiveSong}
                            />
                        );
                    })}
                </div>
            </div>
            <AnimatePresence>
                {activeSong && (
                    <SongCard song={activeSong} setActiveSong={setActiveSong} />
                )}
            </AnimatePresence>
        </ScreenWrapper>
    );
};

type PlaylistCardPropType = {
    song: SongType;
    setActiveSong: React.Dispatch<React.SetStateAction<SongType | null>>;
};

const PlaylistCard = ({ song, setActiveSong }: PlaylistCardPropType) => {
    return (
        <motion.div
            layoutId={`${song.title}-modal`}
            onClick={() => setActiveSong(song)}
            className="flex h-20 cursor-pointer items-center rounded-md border border-neutral-200 bg-neutral-100 px-1.5"
        >
            <motion.div
                layoutId={`image-${song.title}`}
                className="h-full w-20 shrink-0 p-1"
            >
                <Image
                    src={song.coverImage}
                    alt={song.title}
                    width={80}
                    height={80}
                    className="size-full rounded-md object-cover"
                />
            </motion.div>
            <div className="flex flex-1 items-center p-1">
                <div>
                    <motion.h3
                        layoutId={`title-${song.title}`}
                        className="text-lg font-semibold"
                    >
                        {song.title}
                    </motion.h3>
                    <motion.p
                        layoutId={`artist-${song.artist}`}
                        className="text-neutral-500"
                    >
                        {song.artist}
                    </motion.p>
                </div>
            </div>
        </motion.div>
    );
};

type SongCardPropType = {
    song: SongType;
    setActiveSong: React.Dispatch<React.SetStateAction<SongType | null>>;
};

const SongCard = ({ song, setActiveSong }: SongCardPropType) => {
    return (
        <AnimatePresence>
            <motion.div
                key="overlay"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.3 } }}
                className="fixed inset-0 z-20 flex items-center justify-center bg-black/20"
                onClick={() => setActiveSong(null)}
            >
                <motion.div
                    key="modal"
                    layoutId={`${song.title}-modal`}
                    onClick={(e) => e.stopPropagation()}
                    transition={{
                        layout: { duration: 0.35, ease: 'easeInOut' },
                    }}
                    exit={{
                        opacity: 0,
                        transition: { duration: 0.2 },
                    }}
                    className="w-full max-w-2xl overflow-hidden rounded-md border border-neutral-100 bg-white shadow-md"
                >
                    {/* Image */}
                    <motion.div
                        layoutId={`image-${song.title}`}
                        className="w-full"
                    >
                        <Image
                            src={song.coverImage}
                            alt={song.title}
                            height={400}
                            width={800}
                            className="h-64 w-full object-cover"
                            priority
                        />
                    </motion.div>

                    <div className="flex flex-col gap-4 p-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="flex items-center justify-between"
                        >
                            <motion.h3
                                layoutId={`title-${song.title}`}
                                className="text-lg font-semibold"
                            >
                                {song.title}
                            </motion.h3>

                            <motion.p
                                layoutId={`artist-${song.artist}`}
                                className="text-neutral-500"
                            >
                                {song.artist}
                            </motion.p>
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        >
                            {song.description}
                        </motion.p>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

type SongType = {
    title: string;
    artist: string;
    description: string;
    coverImage: string;
};

const SONGS: SongType[] = [
    {
        title: 'Blinding Lights',
        artist: 'The Weeknd',
        description:
            'A synth-wave anthem with an ’80s vibe that blends nostalgia with modern pop.',
        coverImage:
            'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4',
    },
    {
        title: 'Bohemian Rhapsody',
        artist: 'Queen',
        description:
            'A legendary genre-bending masterpiece combining opera, rock, and ballad styles.',
        coverImage:
            'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f',
    },
    {
        title: 'Shape of You',
        artist: 'Ed Sheeran',
        description:
            'A catchy pop hit with tropical influences and smooth rhythms.',
        coverImage:
            'https://images.unsplash.com/photo-1511379938547-c1f69419868d',
    },
    {
        title: 'Smells Like Teen Spirit',
        artist: 'Nirvana',
        description:
            'The defining anthem of the grunge era, raw and rebellious.',
        coverImage:
            'https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2',
    },
    {
        title: 'Billie Jean',
        artist: 'Michael Jackson',
        description:
            'Iconic bassline and groove that reshaped pop music forever.',
        coverImage:
            'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4',
    },
    {
        title: 'Someone Like You',
        artist: 'Adele',
        description:
            'A powerful piano ballad expressing heartbreak and emotional closure.',
        coverImage:
            'https://images.unsplash.com/photo-1519682337058-a94d519337bc',
    },
    {
        title: 'HUMBLE.',
        artist: 'Kendrick Lamar',
        description:
            'A hard-hitting hip-hop track with sharp lyrics and minimal production.',
        coverImage:
            'https://images.unsplash.com/photo-1497032205916-ac775f0649ae',
    },
    {
        title: 'Rolling in the Deep',
        artist: 'Adele',
        description:
            'An explosive soulful track about betrayal and resilience.',
        coverImage:
            'https://images.unsplash.com/photo-1519682337058-a94d519337bc',
    },
    {
        title: 'Uptown Funk',
        artist: 'Mark Ronson ft. Bruno Mars',
        description:
            'A high-energy funk-pop song made to get everyone dancing.',
        coverImage:
            'https://images.unsplash.com/photo-1506157786151-b8491531f063',
    },
    {
        title: 'Lose Yourself',
        artist: 'Eminem',
        description:
            'A motivational rap classic about focus, pressure, and seizing opportunity.',
        coverImage:
            'https://images.unsplash.com/photo-1517230878791-4d28214057c2',
    },
];
