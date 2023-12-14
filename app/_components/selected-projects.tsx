import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Tiny Changes",
    description: "Simplified habit tracker.",
    date: "Nov 2023",
    image: {
      light: "/tiny-changes-light.png",
      dark: "/tiny-changes-dark.png",
    },
    link: "https://tinychanges.me",
  },
  {
    title: "Tracker",
    description: "Simplified habit tracker.",
    date: "Oct 2023",
    image: {
      light: "/tracker-light.png",
      dark: "/tracker-dark.png",
    },
    link: "https://tracker.lol",
  },
];

export const SelectedProjects = () => {
  return (
    <div className="flex flex-col gap-5 px-4 sm:gap-10">
      {projects.map((project, index) => {
        const delay = 60 + 15 * (index + 1);
        return (
          <Link
            key={project.title}
            className="animate-fade-up group cursor-pointer space-y-6 rounded-lg bg-neutral-100 p-4 opacity-0 transition-all duration-300 ease-in-out hover:bg-neutral-200/50 dark:bg-neutral-900 dark:hover:bg-neutral-800/50 sm:p-6"
            style={{
              animationFillMode: "forwards",
              animationDelay: `${delay / 100}s`,
            }}
            href={project.link}
            target="_blank"
          >
            <div className="flex items-start justify-between">
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-1">
                  <h1 className="font-semibold sm:group-hover:underline ">
                    {project.title}
                  </h1>
                  <p className="text-muted-foreground sm:group-hover:underline ">
                    {project.description}
                  </p>
                </div>
                <ArrowUpRight className="hidden h-6 w-6 sm:group-hover:inline" />
              </div>
              <h1 className="text-muted-foreground">{project.date}</h1>
            </div>
            <Image
              alt="Project Image"
              width={4288}
              height={2496}
              src={project.image.light}
              className="dark:hidden"
              sizes="100vw"
              priority
            />
            <Image
              alt="Project Image"
              width={4288}
              height={2496}
              src={project.image.dark}
              className="hidden dark:inline"
              sizes="100vw"
              priority
            />
          </Link>
        );
      })}
    </div>
  );
};
