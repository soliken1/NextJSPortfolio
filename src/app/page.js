"use client";
import DialougeContainer from "@/components/Home/DialougeContainer";
import TopMenuContainer from "@/components/Home/TopMenuContainer";
import Selection from "@/components/Home/Selection";
import PortfolioLoading from "@/components/General/PortfolioLoading";
import { useState } from "react";
import { setCookie } from "cookies-next";

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
