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
        <h1 className="font-semibold">Reading</h1>
        <h1 className="text-muted-foreground">Sun 10 Dec 23</h1>
      </div>
      <div className="flex items-center gap-4">
        <Image
          width={1464}
          height={2048}
          src={current.cover}
          alt="Book cover"
          className="max-w-[64px]"
        />
        <div className="space-y-1">
          <h1 className="font-medium">{current.title}</h1>
          <h1 className="text-muted-foreground">{current.author}</h1>
        </div>
      </div>
    </div>
  );
};
