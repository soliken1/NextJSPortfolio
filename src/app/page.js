"use client";
const DialougeContainer = dynamic(
  () => import("@/components/Home/DialougeContainer"),
  { ssr: false }
);
import TopMenuContainer from "@/components/Home/TopMenuContainer";
const Selection = dynamic(() => import("@/components/Home/Selection"), {
  ssr: false,
});
const PortfolioLoading = dynamic(
  () => import("@/components/General/PortfolioLoading"),
  { ssr: false }
);
import { useState } from "react";
import { setCookie } from "cookies-next";
import dynamic from "next/dynamic";

function Home() {
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((prevCount) => prevCount + 1);
    if (count >= 2) {
      setCookie("hasVisited", true);
    }
  };
  setTimeout(() => {
    setLoading(false);
  }, 2000);
  if (loading) {
    return <PortfolioLoading />;
  }
  return (
    <div className="bg-slate-950 h-screen w-screen">
      <TopMenuContainer />
      <Selection count={count} />
      <DialougeContainer count={count} onClick={handleClick} />
    </div>
  );
}

export default Home;
