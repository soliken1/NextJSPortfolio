import React from "react";
import { useRouter } from "next/navigation";
import { newGreetingMessage, existingGreetingMessage } from "@/utils/dialouges";

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
    <div className="flex flex-row h-screen justify-evenly items-center gap-5">
      <div className="ps-5 pe-5 pt-1 pb-1">
        <label className="text-white cursor-pointer font-mono text-3xl">
          Skills
        </label>
      </div>
      <div className="ps-5 pe-5 pt-1 pb-1">
        <label className="text-white cursor-pointer font-mono text-3xl">
          Projects
        </label>
      </div>
    </div>
  );
};

export default Selection;
