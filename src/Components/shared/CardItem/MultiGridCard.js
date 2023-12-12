import { useScroll } from "framer-motion";
import React, { useState } from "react";

const MultiGridCard = () => {
  const [item, setItem] = useState([
    { id: 1, value: "table", color: "bg-cyan-600" },
    { id: 2, value: "box", color: "bg-cyan-600" },
    { id: 3, value: "chart", color: "bg-cyan-600" },
    { id: 4, value: "box", color: "bg-cyan-600" },
    { id: 5, value: "box", color: "bg-cyan-600" },
    { id: 6, value: "table", color: "bg-cyan-600" },
  ]);
  return (
    <div>
      <div class="grid grid-cols-2 gap-4 container mx-auto">
        <div class="col-span-2  box-content h-100% w-100% p-4  bg-cyan-600">
          01
        </div>
        <div class="col-span-1 box-content h-100% w-100% p-4  bg-emerald-700">
          02
        </div>
        <div class="col-span-1 box-content h-100% w-100% p-4  bg-red-600">
          03
        </div>
        <div class="col-span-2  box-content h-100% w-100% p-4 bg-pink-700">
          04
        </div>
        <div class="col-span-1 box-content h-100% w-100% p-4 bg-violet-800">
          05
        </div>
        <div class="col-span-2 box-content h-100% w-100% p-4 bg-amber-600">
          06
        </div>
      </div>
    </div>
  );
};

export default MultiGridCard;
