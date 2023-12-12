import React, { useState } from "react";
import StackedAreaChart from "../shared/StackedAreaChart";
import TwoLevelPieChart from "../shared/TwoLevelPieChart";
import HighlightAndZoomLineChart from "../shared/HighlightAndZoomLineChart";
import MixBarChart from "../shared/MixBarChart";

const cardItem = [
  { id: 1, cardName: "summery", flag: true, data: "StackedAreaChart" },
  { id: 2, cardName: "top_news", flag: true, data: "TwoLevelPieChart" },
  { id: 3, cardName: "crypto", flag: true, data: "StackedAreaChart" },
  { id: 4, cardName: "balance", flag: true, data: "TwoLevelPieChartt" },
  {
    id: 5,
    cardName: "update",
    flag: true,
    data: "HighlightAndZoomLineChart",
  },
  {
    id: 6,
    cardName: "finace",
    flag: true,
    data: "HighlightAndZoomLineChart",
  },
  {
    id: 7,
    cardName: "internation",
    flag: true,
    data: "HighlightAndZoomLineChart",
  },
  { id: 8, cardName: "current", flag: true, data: "MixBarChart" },
  { id: 9, cardName: "news", flag: true, data: "StackedAreaChart" },
  { id: 10, cardName: "highlight", flag: true, data: "MixBarChart" },
  { id: 11, cardName: "investor", flag: true, data: "StackedAreaChart" },
  { id: 12, cardName: "braking_new", flag: true, data: "MixBarChart" },
];

const body = () => {
  return (
    <div className="grid xl:grid-cols-2 lg:grid-cols-4gap-2 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1   container mx-auto mt-10 flex-col gap-5">
      {data.map((item, i) => {
        return (
          <a
            key={item.cardId}
            idToDelete={item.cardId}
            href="#"
            className="block max-w-100% h-200 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
          >
            <div className="flex-row float-left ">{item.cardName}</div>
            <div
              className="float-right bg-sky-500 hover:bg-sky-700 "
              onClick={() => handleDelete(item.cardId)}
            >
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
            {/* <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white mt-10">
              Noteworthy technology acquisitions 2021
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p> */}
            <div className="max-w-100% h-80">
              <StackedAreaChart />
            </div>
          </a>
        );
      })}
    </div>
  );
};

export default body;
