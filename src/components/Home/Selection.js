"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { newGreetingMessage, existingGreetingMessage } from "@/utils/dialouges";
import Link from "next/link";

const Selection = ({ count }) => {
  const router = useRouter();

  if (count <= 3) {
    return;
  }
  if (
    count === existingGreetingMessage.length ||
    count === newGreetingMessage.length
  ) {
    router.push("/not-found");
  }
  return (
    <div className="flex -translate-y-12 h-screen justify-center gap-20 md:mt-0 md:gap-0 md:justify-evenly items-center flex-col md:flex-row">
      <Link href="/skills" className="ps-5 pe-5 pt-1 pb-1">
        <label className="text-white cursor-pointer font-mono text-3xl">
          Skills
        </label>
      </Link>
      <Link href="/projects" className="ps-5 pe-5 pt-1 pb-1">
        <label className="text-white cursor-pointer font-mono text-3xl">
          Projects
        </label>
      </Link>
    </div>
  );
};

export default Selection;
