import React, { useState } from "react";
// import StackedAreaChart from "../shared/StackedAreaChart";
// import TwoLevelPieChart from "../shared/TwoLevelPieChart";
// import HighlightAndZoomLineChart from "../shared/HighlightAndZoomLineChart";
import MixBarChart from "../MixBarChart";

const RegularCard = () => {
  return (
    <div className="grid xl:grid-cols-2 lg:grid-cols-4gap-2 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1   container mx-auto mt-10 flex-col gap-5">
      <a
        href="#"
        className="block max-w-100% h-200 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
      >
        <div className="flex-row float-left ">{item.cardName}</div>
        <div className="float-right bg-sky-500 hover:bg-sky-700 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
        <div className="max-w-100% h-80">{/* <MixBarChart /> */}</div>
      </a>
    </div>
  );
};

export default RegularCard;
