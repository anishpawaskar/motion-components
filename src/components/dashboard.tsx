"use client";

import React, { useState } from "react";
import { ScreenWrapper } from "./common/screen-wrapper";
import {
  BellIcon,
  HouseIcon,
  ListTodoIcon,
  MessageCircleIcon,
  UsersIcon,
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";

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
        width: "16rem",
        justifyContent: "start",
      }}
      animate={{
        width: open ? "16rem" : "4.5rem",
        justifyContent: open ? "start" : "center",
      }}
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
      className="w-18 p-4 shrink-0 bg-white border-r border-neutral-200 flex flex-col items-center"
    >
      <SidebarHeader open={open} setOpen={setOpen} />
      <SidebarContent open={open} />
    </motion.aside>
  );
};

const SidebarHeader = ({ open, setOpen }) => {
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
      className="shrink-0 w-full flex items-center gap-2 h-10"
    >
      <div className="h-full w-10 rounded-lg bg-neutral-800 text-neutral-100 flex items-center justify-center font-semibold shrink-0">
        A
      </div>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="profile-container"
            className="flex items-center gap-1 h-full flex-1 overflow-hidden"
            style={{ minWidth: 0 }}
            variants={container}
            initial="closed"
            animate="open"
            exit="closed"
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <motion.div
              key="name"
              variants={item}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="flex-1 overflow-hidden text-sm"
              style={{ minWidth: 0 }}
            >
              <p className="font-semibold truncate text-neutral-800">
                Anish Pawaskar
              </p>
              <p className="text-neutral-600 truncate">Frontend Developer</p>
            </motion.div>

            <motion.button
              key="bell"
              variants={item}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="size-5 flex items-center justify-center shrink-0"
            >
              <BellIcon size={16} />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const SidebarContent = ({ open }) => {
  const NAV_LINKS = [
    {
      label: "Dashboard",
      href: "/",
      icon: HouseIcon,
    },
    {
      label: "Tasks",
      href: "/tasks",
      icon: ListTodoIcon,
    },
    {
      label: "Team",
      href: "/teams",
      icon: UsersIcon,
    },
    {
      label: "Messages",
      href: "/messages",
      icon: MessageCircleIcon,
    },
  ];

  return (
    <nav className="my-5 flex-1 w-full">
      <ul className="flex flex-col gap-1">
        {NAV_LINKS.map((navlink) => {
          return (
            <SidebarLink key={navlink.label} navlink={navlink} open={open} />
          );
        })}
      </ul>
    </nav>
  );
};

const SidebarLink = ({ navlink, open }) => {
  const IconComponent = navlink.icon;

  return (
    <li>
      <Link href={navlink.href} className="flex items-center h-10 gap-2">
        <div className="w-10 h-full rounded-lg bg-neutral-800 text-neutral-100 flex items-center justify-center shrink-0">
          <IconComponent size={18} />
        </div>
        <AnimatePresence>
          {open && (
            <motion.span
              key="label"
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
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
  return <main className="flex-1 h-full p-5 bg-slate-50">Dashboard</main>;
};
