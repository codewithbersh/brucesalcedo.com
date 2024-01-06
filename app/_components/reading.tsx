import Image from "next/image";

const current = {
  title: "How To Win Friends & Influence People",
  author: "Dale Carnegie",
  cover: "/htwfaip.png",
  date: "2024-01-06",
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
          className="animate-fade-up text-sm text-muted-foreground opacity-0"
          style={{ animationFillMode: "forwards", animationDelay: "1.80s" }}
        >
          {new Date(current.date).toDateString()}
        </h1>
      </div>
      <div className="flex items-center gap-4">
        <Image
          width={3991}
          height={4466}
          src={current.cover}
          alt="Book cover"
          className="max-w-[64px] animate-fade-up opacity-0"
          style={{ animationFillMode: "forwards", animationDelay: "1.95s" }}
          sizes="100vw"
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
