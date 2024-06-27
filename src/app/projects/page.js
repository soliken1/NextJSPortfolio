"use client";
import { useState } from "react";
import dynamic from "next/dynamic";
import TopMenuContainer from "@/components/Home/TopMenuContainer";
import ProjectContainer from "@/components/Projects/ProjectContainer";

const PortfolioLoading = dynamic(
  () => import("@/components/General/PortfolioLoading"),
  { ssr: false }
);

const page = () => {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 3000);

  if (loading) {
    return (
      <PortfolioLoading
        classes="font-mono text-2xl text-white"
        label="Loading Projects..."
      />
    );
  }

  return (
    <div className="h-svh w-screen bg-gray-950 flex flex-col justify-center items-center">
      <TopMenuContainer />
      <ProjectContainer />
    </div>
  );
};

export default page;
