import { Command } from "lucide-react";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";

export const Navigation = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="fixed bottom-4 left-4 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border  bg-neutral-100 transition hover:bg-neutral-200 dark:bg-neutral-900 dark:hover:bg-neutral-800 md:left-16 md:top-16">
          <Command className="h-5 w-5" />
        </button>
      </DialogTrigger>
      <DialogContent>
        <div className="flex items-center justify-between px-4 py-2">
          <div className="flex items-center">
            <Command className="mr-2 h-4 w-4" />
            <span className="text-sm font-medium text-muted-foreground">
              Quick Actions
            </span>
          </div>

          <div className="flex items-center">
            <span className="mr-2 text-sm text-muted-foreground">Exit</span>
            <span className="rounded border bg-neutral-100 px-1.5 py-1 text-[10px] font-medium dark:bg-neutral-900">
              ESC
            </span>
          </div>
        </div>
        <Separator />

        <div></div>
      </DialogContent>
    </Dialog>
  );
};
