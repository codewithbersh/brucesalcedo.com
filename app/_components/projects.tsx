import { MoreProjects } from "./more-projects";
import { SelectedProjects } from "./selected-projects";

export const Projects = () => {
  return (
    <div className="space-y-10">
      <h1
        className="px-4 font-semibold opacity-0 "
        style={{ animationFillMode: "forwards", animationDelay: "0.60s" }}
      >
        Projects
      </h1>
      <SelectedProjects />
      <MoreProjects />
    </div>
  );
};
