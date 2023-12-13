import Image from "next/image";

const current = {
  title: "Deep Work",
  author: "Cal Newport",
  cover: "/deep-work.png",
};

export const Reading = () => {
  return (
    <div className="space-y-10 px-4">
      <div className="flex items-center justify-between gap-4">
        <h1
          className="animate-fade-up font-semibold opacity-0"
          style={{ animationFillMode: "forwards", animationDelay: "1.75s" }}
        >
          Reading
        </h1>
        <h1
          className="animate-fade-up text-muted-foreground opacity-0"
          style={{ animationFillMode: "forwards", animationDelay: "1.80s" }}
        >
          Sun 10 Dec 23
        </h1>
      </div>
      <div className="flex items-center gap-4">
        <Image
          width={1464}
          height={2048}
          src={current.cover}
          alt="Book cover"
          className="animate-fade-up max-w-[64px] opacity-0"
          style={{ animationFillMode: "forwards", animationDelay: "1.95s" }}
        />
        <div className="space-y-1">
          <h1
            className="animate-fade-up font-medium opacity-0"
            style={{ animationFillMode: "forwards", animationDelay: "2.10s" }}
          >
            {current.title}
          </h1>
          <h1
            className="animate-fade-up text-muted-foreground opacity-0"
            style={{ animationFillMode: "forwards", animationDelay: "2.25s" }}
          >
            {current.author}
          </h1>
        </div>
      </div>
    </div>
  );
};
