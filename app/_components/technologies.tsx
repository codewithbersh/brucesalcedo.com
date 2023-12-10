import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Icons } from "@/components/ui/icons";

const technologies = [
  {
    icon: Icons.nextjs,
    label: "NextJS",
    link: "https://nextjs.org/",
  },
  {
    icon: Icons.react,
    label: "React",
    link: "https://react.dev/",
  },
  {
    icon: Icons.typeScript,
    label: "TypeScript",
    link: "https://www.typescriptlang.org/",
  },
  {
    icon: Icons.tRPC,
    label: "tRPC",
    link: "https://trpc.io/",
  },
  {
    icon: Icons.prisma,
    label: "Prisma",
    link: "https://www.prisma.io/",
  },
  {
    icon: Icons.tailwind,
    label: "Tailwind",
    link: "https://tailwindcss.com/",
  },
  {
    icon: Icons.figma,
    label: "Figma",
    link: "https://www.figma.com/",
  },
  {
    icon: Icons.django,
    label: "Django",
    link: "https://www.djangoproject.com/",
  },
];

export const Technologies = () => {
  return (
    <div className="space-y-10">
      <h1 className="px-4 font-semibold">Technologies</h1>
      <div className="grid gap-8 sm:grid-cols-2">
        {technologies.map(({ icon: Icon, label, link }) => (
          <Link
            key={label}
            className="group flex cursor-pointer items-center gap-4 rounded-lg px-4 py-2 transition-all duration-300 ease-in-out sm:hover:bg-neutral-100 sm:dark:hover:bg-neutral-900"
            href={link}
            target="_blank"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-neutral-100 dark:bg-neutral-900">
              <Icon />
            </div>
            <h1 className="font-medium leading-none">{label}</h1>
            <ArrowUpRight className="ml-auto hidden h-5 w-5 text-muted-foreground transition-all sm:group-hover:inline " />
          </Link>
        ))}
      </div>
    </div>
  );
};
