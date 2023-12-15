"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import {
  Check,
  Command,
  Mail,
  MessageSquarePlus,
  Moon,
  Sun,
} from "lucide-react";
import { useQuickActions } from "@/hooks/use-quick-actions";
import { useSendMessage } from "@/hooks/use-send-message";

import { Separator } from "@/components/ui/separator";
import { Icons } from "@/components/ui/icons";
import { DialogModal } from "./dialog-modal";

const projects = [
  {
    label: "Tiny Changes",
    icon: Icons.tinyChanges,
    link: "https://tinychanges.me",
  },
  {
    label: "Tracker",
    icon: Icons.tracker,
    link: "https://tracker.lol",
  },
];

const more = [
  {
    label: "Github",
    icon: Icons.github,
    link: "https://github.com/codewithbersh",
  },
  {
    label: "X (Twitter)",
    icon: Icons.twitter,
    link: "https://twitter.com/codewithbersh",
  },
  {
    label: "read.cv",
    icon: Icons.readCV,
    link: "https://read.cv/brucesalcedo",
  },
];

export const QuickActionsModal = () => {
  const [copied, setCopied] = useState<boolean>(false);
  const { isOpen, setIsOpen } = useQuickActions();
  const { setIsOpen: openMessageModal } = useSendMessage();
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setIsOpen(!isOpen);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const actions = [
    {
      label: copied ? "Copied" : "Email",
      icon: copied ? Check : Mail,
      action: () => {
        if (copied) return;

        setCopied(true);
        navigator.clipboard.writeText("hello@brucesalcedo.com");

        setTimeout(() => {
          setCopied(false);
        }, 3000);
      },
    },
    {
      label: theme === "light" ? "Dark" : "Light",
      icon: theme === "light" ? Sun : Moon,
      action: () => setTheme(theme === "light" ? "dark" : "light"),
    },
    {
      label: "Message",
      icon: MessageSquarePlus,
      action: () => {
        setIsOpen(false);
        openMessageModal(true);
      },
    },
  ];

  return (
    <DialogModal isOpen={isOpen} setIsOpen={setIsOpen}>
      <div className="flex items-center justify-between px-4 py-2">
        <div className="flex items-center">
          <Command className="mr-2 h-4 w-4" />
          <span className="text-sm font-medium text-muted-foreground">
            Quick Actions
          </span>
        </div>

        <div className="hidden items-center sm:flex">
          <span className="mr-2 text-sm text-muted-foreground">Exit</span>
          <span className="rounded border bg-neutral-100 px-1.5 py-1 text-[10px] font-medium dark:bg-neutral-900">
            ESC
          </span>
        </div>
      </div>
      <Separator />

      <div className="flex flex-col gap-4 px-4 py-3">
        <div className="rounded-sm bg-neutral-200 px-2 py-[6px] text-xs font-medium leading-none dark:bg-neutral-800">
          Suggested
        </div>

        <div className="flex items-center justify-around ">
          {projects.map(({ label, icon: Icon, link }) => (
            <div
              className="flex w-[60px] flex-col items-center gap-2"
              key={label}
            >
              <Link
                className="grid h-10 w-10 place-items-center rounded-md bg-neutral-950 transition-opacity duration-300 ease-in-out hover:opacity-75"
                href={link}
                target="_blank"
              >
                <Icon />
              </Link>
              <div className="  max-w-[55px] truncate text-xs text-muted-foreground">
                {label}
              </div>
            </div>
          ))}
          <Separator
            orientation="vertical"
            className="hidden h-10 w-[2px] md:block"
          />

          {actions.map(({ action, icon: Icon, label }) => (
            <div
              key={label}
              className="flex w-[60px] flex-col items-center gap-2"
            >
              <button
                className="flex h-10 w-10 items-center justify-center rounded-md bg-neutral-200 transition-opacity duration-300 ease-in-out hover:opacity-75 dark:bg-neutral-800"
                onClick={action}
              >
                <Icon className="h-6 w-6" />
              </button>
              <div className="  max-w-[55px] truncate text-xs text-muted-foreground">
                {label}
              </div>
            </div>
          ))}
        </div>

        <div className="rounded-sm bg-neutral-200 px-2 py-[6px] text-xs font-medium leading-none dark:bg-neutral-800">
          More
        </div>

        <div className="flex flex-col gap-2">
          {more.map(({ icon: Icon, label, link }) => (
            <Link
              key={label}
              className="flex cursor-pointer items-center gap-2 rounded px-2 py-1 transition-all duration-300 ease-in-out hover:bg-neutral-200 dark:hover:bg-neutral-800"
              href={link}
              target="_blank"
            >
              <div className="flex h-6 w-6 items-center justify-center rounded-sm bg-primary">
                <Icon />
              </div>

              <div className="text-sm">{label}</div>

              <div className="ml-auto text-xs text-muted-foreground">Link</div>
            </Link>
          ))}
        </div>
      </div>
    </DialogModal>
  );
};
