import { Projects } from "./_components/projects";
import { Technologies } from "./_components/technologies";
import { Reading } from "./_components/reading";

export default function Home() {
  return (
    <div className="flex-col gap-32">
      <Projects />
      <Technologies />
      <Reading />
    </div>
  );
}
