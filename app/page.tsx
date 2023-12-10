import { Header } from "./_components/header";
import { Projects } from "./_components/projects";
import { Reading } from "./_components/reading";
import { Technologies } from "./_components/technologies";

export default function Home() {
  return (
    <div className="mx-auto flex max-w-[608px] flex-col gap-32 py-32">
      <Header />
      <Projects />
      <Technologies />
      <Reading />
    </div>
  );
}
