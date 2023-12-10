import Link from "next/link";
import Image from "next/image";

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
    <div className="flex flex-col gap-10">
      {projects.map((project) => (
        <Link
          key={project.title}
          className="group cursor-pointer space-y-6 rounded-lg bg-neutral-100 p-4 transition-all duration-300 ease-in-out hover:opacity-75 dark:bg-neutral-900 sm:p-6"
          href={project.link}
          target="_blank"
        >
          <div className="flex items-start justify-between">
            <div className="space-y-1">
              <h1 className="font-semibold group-hover:underline ">
                {project.title}
              </h1>
              <p className="text-muted-foreground group-hover:underline ">
                {project.description}
              </p>
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
      ))}
    </div>
  );
};
