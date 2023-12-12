"use client";

import { useQuickActions } from "@/hooks/use-quick-actions";
import { Command } from "lucide-react";

export const Navigation = () => {
  const { setIsOpen } = useQuickActions();

  return (
    <button
      className="fixed bottom-4 left-4 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border  bg-neutral-100 transition hover:bg-neutral-200 dark:bg-neutral-900 dark:hover:bg-neutral-800 md:left-16 md:top-16"
      onClick={() => setIsOpen(true)}
    >
      <Command className="h-5 w-5" />
    </button>
  );
};
