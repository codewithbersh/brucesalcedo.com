import { Header } from "./_components/header";
import { Projects } from "./_components/projects";

export default function Home() {
  return (
    <div className="mx-auto flex max-w-[608px] flex-col gap-32 py-32">
      <Header />
      <Projects />
    </div>
  );
}
