"use client";
import dynamic from "next/dynamic";
import Stats from "@/components/Skills/Stats";
import TopMenuContainer from "@/components/Home/TopMenuContainer";
const PortfolioLoading = dynamic(
  () => import("@/components/General/PortfolioLoading"),
  { ssr: false }
);
import { useState } from "react";
function Skills() {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 2000);

  if (loading) {
    return (
      <PortfolioLoading
        classes="font-mono text-2xl text-white"
        label="Loading Skills..."
      />
    );
  }

  return (
    <div className="h-full w-screen bg-gray-950 flex flex-col md:pt-0 pt-20 gap-2">
      <TopMenuContainer />
      <Stats />
    </div>
  );
}

export default Skills;
