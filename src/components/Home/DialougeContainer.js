"use client";
import DialougeMessage from "./DialougeMessage";
import Portrait from "./Portrait";
const Dialouge = ({ count, onClick }) => {
  return (
    <div
      className="absolute bottom-0 left-0 bg-gray-950 h-40 w-full duration-1000"
      onClick={onClick}
    >
      <Portrait count={count} />
      <DialougeMessage count={count} />
    </div>
  );
};

export default Dialouge;
