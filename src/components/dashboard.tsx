'use client';

import React, { FC, useState } from 'react';
import { ScreenWrapper } from './common/screen-wrapper';
import {
    BellIcon,
    HouseIcon,
    ListTodoIcon,
    MessageCircleIcon,
    UsersIcon,
} from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'motion/react';

type NavLinkType = {
    label: string;
    href: string;
    icon: FC<{ size?: number }>;
};

export const Dashboard = () => {
    return (
        <ScreenWrapper className="items-stretch">
            <Sidebar />
            <MainContainer />
        </ScreenWrapper>
    );
};

const Sidebar = () => {
    const [open, setOpen] = useState(true);

    return (
        <motion.aside
            initial={{
                width: '16rem',
                justifyContent: 'start',
            }}
            animate={{
                width: open ? '16rem' : '4.5rem',
                justifyContent: open ? 'start' : 'center',
            }}
            transition={{
                duration: 0.5,
                ease: 'easeInOut',
            }}
            className="flex w-18 shrink-0 flex-col items-center border-r border-neutral-200 bg-white p-4"
        >
            <SidebarHeader open={open} setOpen={setOpen} />
            <SidebarContent open={open} />
        </motion.aside>
    );
};

const SidebarHeader = ({
    open,
    setOpen,
}: {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
    const container = {
        open: {
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0,
            },
        },
        closed: {
            transition: {
                staggerChildren: 0.15,
                staggerDirection: -1,
            },
        },
    };

    const item = {
        open: { opacity: 1, x: 0 },
        closed: { opacity: 0, x: -10 },
    };

    return (
        <div
            onClick={() => setOpen((prevState) => !prevState)}
            className="flex h-10 w-full shrink-0 items-center gap-2"
        >
            <div className="flex h-full w-10 shrink-0 items-center justify-center rounded-lg bg-neutral-800 font-semibold text-neutral-100">
                A
            </div>

            <AnimatePresence initial={false}>
                {open && (
                    <motion.div
                        key="profile-container"
                        className="flex h-full flex-1 items-center gap-1 overflow-hidden"
                        style={{ minWidth: 0 }}
                        variants={container}
                        initial="closed"
                        animate="open"
                        exit="closed"
                        transition={{ duration: 0.5, ease: 'easeInOut' }}
                    >
                        <motion.div
                            key="name"
                            variants={item}
                            transition={{ duration: 0.5, ease: 'easeInOut' }}
                            className="flex-1 overflow-hidden text-sm"
                            style={{ minWidth: 0 }}
                        >
                            <p className="truncate font-semibold text-neutral-800">
                                Anish Pawaskar
                            </p>
                            <p className="truncate text-neutral-600">
                                Frontend Developer
                            </p>
                        </motion.div>

                        <motion.button
                            key="bell"
                            variants={item}
                            transition={{ duration: 0.5, ease: 'easeInOut' }}
                            className="flex size-5 shrink-0 items-center justify-center"
                        >
                            <BellIcon size={16} />
                        </motion.button>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const SidebarContent = ({ open }: { open: boolean }) => {
    const NAV_LINKS = [
        {
            label: 'Dashboard',
            href: '/',
            icon: HouseIcon,
        },
        {
            label: 'Tasks',
            href: '/tasks',
            icon: ListTodoIcon,
        },
        {
            label: 'Team',
            href: '/teams',
            icon: UsersIcon,
        },
        {
            label: 'Messages',
            href: '/messages',
            icon: MessageCircleIcon,
        },
    ];

    return (
        <nav className="my-5 w-full flex-1">
            <ul className="flex flex-col gap-1">
                {NAV_LINKS.map((navlink, idx) => {
                    const isSelected = idx === 2;

                    return (
                        <SidebarLink
                            key={navlink.label}
                            navlink={navlink}
                            open={open}
                            isSelected={isSelected}
                        />
                    );
                })}
            </ul>
        </nav>
    );
};

const SidebarLink = ({
    navlink,
    open,
    isSelected,
}: {
    navlink: NavLinkType;
    open: boolean;
    isSelected: boolean;
}) => {
    const IconComponent = navlink.icon;

    return (
        <li>
            <Link
                href={navlink.href}
                className={cn(
                    'flex h-10 items-center gap-2 rounded-md',
                    isSelected
                        ? 'bg-neutral-700 text-white'
                        : 'hover:bg-neutral-700 hover:text-white'
                )}
            >
                <div className="flex h-full w-10 shrink-0 items-center justify-center rounded-lg">
                    <IconComponent size={18} />
                </div>
                <AnimatePresence>
                    {open && (
                        <motion.span
                            key="label"
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -10 }}
                            transition={{ duration: 0.5, ease: 'easeInOut' }}
                            className="flex-1 truncate"
                        >
                            {navlink.label}
                        </motion.span>
                    )}
                </AnimatePresence>
            </Link>
        </li>
    );
};

const MainContainer = () => {
    return <main className="h-full flex-1 bg-slate-50 p-5">Dashboard</main>;
};
