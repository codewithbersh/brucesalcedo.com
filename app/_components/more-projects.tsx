"use client";

import { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";

type TProject = {
  title: string;
  description: string;
  link: string;
  badge?: "Archived" | "Client";
};

const projects: TProject[] = [
  {
    title: "Portfolio Version 0",
    description: "My first website portfolio.",
    link: "https://portfolio-v0-lyart.vercel.app/",
    badge: "Archived",
  },
  {
    title: "Team Space",
    description: "A collaborative project management app.",
    link: "https://teamspace-lac.vercel.app/",
    badge: "Archived",
  },
  {
    title: "Use Brain",
    description: "An interactive quiz platform.",
    link: "https://use-brain.vercel.app/",
    badge: "Archived",
  },
  {
    title: "West Lagoon Estates",
    description: "A real estate platform.",
    link: "https://westlagoonestates.com",
    badge: "Client",
  },
];

export const MoreProjects = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div>
      <div className="px-4">
        {!open && (
          <Button
            variant="ghost"
            className="animate-fade-up w-full text-muted-foreground opacity-0 "
            style={{ animationFillMode: "forwards", animationDelay: "1.05s" }}
            onClick={() => setOpen(true)}
          >
            Show more
          </Button>
        )}
      </div>

      {open && (
        <div className="flex flex-col gap-8">
          {projects.map((project, index) => {
            const delay = 0.15 * (index + 1);
            return (
              <Link
                key={project.title}
                className="animate-fade-up flex cursor-pointer items-start justify-between gap-4 rounded-lg px-4 py-3 opacity-0 sm:hover:bg-neutral-100 sm:dark:hover:bg-neutral-900"
                href={project.link}
                target="_blank"
                style={{
                  animationFillMode: "forwards",
                  animationDelay: `${delay}s`,
                }}
              >
                <div className="flex w-full flex-col gap-1">
                  <div className="flex items-start justify-between">
                    <h1 className="font-semibold">{project.title}</h1>
                    {project.badge && (
                      <div
                        className={cn(
                          "flex h-6 items-center justify-center rounded-full border px-3 text-xs",
                          project.badge === "Archived" &&
                            "border-yellow-300/75 bg-yellow-300/10 text-yellow-400",
                          project.badge === "Client" &&
                            "border-green-300/75 bg-green-300/10 text-green-400",
                        )}
                      >
                        {project.badge}
                      </div>
                    )}
                  </div>
                  <p className="text-muted-foreground">{project.description}</p>
                </div>
              </Link>
            );
          })}

          <Button
            variant="ghost"
            className="w-full text-muted-foreground"
            onClick={() => setOpen(false)}
          >
            Show less
          </Button>
        </div>
      )}
    </div>
  );
};
