"use client";

import Link from "next/link";
import { useState } from "react";
import { Check, Copy } from "lucide-react";

import { CurrentTimeDoha } from "./current-time-doha";

const socials = [
  {
    label: "Github",
    link: "https://github.com/codewithbersh/",
  },
  {
    label: "Twitter",
    link: "https://twitter.com/codewithbersh/",
  },
  {
    label: "Read.cv",
    link: "https://read.cv/brucesalcedo/",
  },
];

export const Footer = () => {
  const [copy, setCopy] = useState<boolean>(false);

  const handleCopy = () => {
    setCopy(true);
    navigator.clipboard.writeText("hello@brucesalcedo.com");
    setTimeout(() => {
      setCopy(false);
    }, 2000);
  };

  return (
    <footer className="space-y-6 px-4">
      <hr className="border-neutral-100 dark:border-neutral-900" />
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex gap-10">
          {socials.map((social) => (
            <Link
              href={social.link}
              className="cursor-pointer text-muted-foreground underline underline-offset-2 transition-all duration-300 ease-in-out hover:text-primary"
              target="_blank"
            >
              {social.label}
            </Link>
          ))}
        </div>

        <div
          className="group flex cursor-pointer items-center gap-[6px] text-muted-foreground"
          onClick={handleCopy}
        >
          <h1 className="group-hover:underline group-hover:underline-offset-2">
            hello@brucesalcedo.com
          </h1>
          {copy ? (
            <Check className="h-4 w-4 group-hover:text-primary" />
          ) : (
            <Copy className="h-4 w-4 group-hover:text-primary" />
          )}
        </div>
      </div>

      <CurrentTimeDoha />
    </footer>
  );
};
