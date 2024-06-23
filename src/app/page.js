"use client";
import DialougeContainer from "@/components/Home/DialougeContainer";
import TopMenuContainer from "@/components/Home/TopMenuContainer";
import { useState } from "react";
function Home() {
  const [loading, setLoading] = useState(true);
  setTimeout(() => {
    setLoading(false);
  }, 5000);
  if (loading) {
    return (
      <div className="flex h-screen w-screen bg-gray-950 justify-center items-center">
        <label className="font-mono text-6xl text-white">Portfolio</label>
      </div>
    );
  }
  return (
    <div className="bg-gray-950 h-screen w-screen duration-1000">
      <TopMenuContainer />
      <DialougeContainer />
    </div>
  );
}

export default Home;
