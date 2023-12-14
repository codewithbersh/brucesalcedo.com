"use client";

import { useSendMessage } from "@/hooks/use-send-message";

export const Header = () => {
  const { setIsOpen } = useSendMessage();

  return (
    <div className="space-y-10 px-4">
      <div className="space-y-2">
        <h1
          className="animate-fade-up font-semibold opacity-0"
          style={{ animationFillMode: "forwards", animationDelay: "0.15s" }}
        >
          Bruce Salcedo
        </h1>
        <h2
          className="animate-fade-up text-muted-foreground opacity-0"
          style={{ animationFillMode: "forwards", animationDelay: "0.30s" }}
        >
          Web Developer
        </h2>
      </div>
      <p
        className=" animate-fade-up text-muted-foreground opacity-0"
        style={{ animationFillMode: "forwards", animationDelay: "0.45s" }}
      >
        A passionate developer with a love for{" "}
        <span className="text-primary">minimal</span> and{" "}
        <span className="text-primary">high-quality designs</span>. Open to
        full-time or freelance opportunities.{" "}
        <span
          className="cursor-pointer text-primary underline-offset-2 hover:underline"
          onClick={() => setIsOpen(true)}
        >
          Get in touch.
        </span>
      </p>
    </div>
  );
};
