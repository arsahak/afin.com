import React, { useEffect, useState, useContext } from "react";
import LineChartGraph from "../ChartData.js/LineChartGraph";
import TableData from "../ChartData.js/TableData";
import FormTable from "../ChartData.js/FormTable";
import { UserContext } from "../../../UseContext/UserContext";
import SqlDataTable from "../ChartData.js/SqlDataTable";
import CustomFormTable from "../ChartData.js/CustomFormTable";

const FixedCardItem = () => {
  const { menuName, setMenuName } = useContext(UserContext);
  const [logData, setLogData] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setLogData("props.flagId");
    }, 1000);
  }, ["props.flagId"]);

  const [items, setItems] = useState(() => {
    const storedData = localStorage.getItem("userSortData");
    return storedData ? JSON.parse(storedData) : [];
  });

  return (
    <div className="grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 container mx-auto mt-5 flex-col gap-1 px-36">
      {items?.map((item, i) => {
        if (item.cardFlag === "true" && item.cardMenu === menuName) {
          return (
            <div
              className={
                item.cardSize === "big"
                  ? "col-span-3"
                  : item.cardSize === "medium"
                  ? "col-span-2"
                  : item.cardSize === "small"
                  ? "col-span-1"
                  : "col-span-1"
              }
            >
              {eval(item.cardItem)[0].process === "linebarchart" ? (
                <div>
                  <a
                    href="#"
                    className="block max-w-100% h-400 pb-6 p-1 bg-white border border-gray-100 rounded-lg dark:bg-gray-800 dark:border-gray-700"
                  >
                    <div className="flex-row float-left font-mono text-sm ">
                      {item.cardTop}
                    </div>
                    <div className="max-w-100% h-100 mt-20 mb-10">
                      <LineChartGraph
                        lineChart={eval(item.cardItem) || "demo"}
                        id={item.cardTop}
                        logData={logData}
                      />
                    </div>
                    <div className="flex-row float-left font-mono text-sm ">
                      {item.cardBottom}
                    </div>
                  </a>
                </div>
              ) : eval(item.cardItem)[0].process === "tabledata" ? (
                <div>
                  <a
                    href="#"
                    className="block max-w-100% h-400 pb-6 p-1 bg-white border border-gray-100 rounded-lg dark:bg-gray-800 dark:border-gray-700"
                  >
                    <div className="flex-row float-left font-mono text-sm ">
                      {item.cardTop}
                    </div>
                    <div className="max-w-100% h-100 mt-8 mb-5">
                      <TableData
                        lineChart={eval(item.cardItem) || "demo"}
                        id={item.cardTop}
                        logData={logData}
                      />
                    </div>
                    <div className="flex-row float-left font-mono text-sm">
                      {item.cardBottom}
                    </div>
                  </a>
                </div>
              ) : eval(item.cardItem)[0].process === "formtable" ? (
                <>
                  <div>
                    <span
                      href="#"
                      className="block max-w-100% h-400 pb-6 p-1 bg-white border border-gray-100 rounded-lg dark:bg-gray-800 dark:border-gray-700"
                    >
                      <div className="flex-row float-left  font-mono text-sm">
                        {" "}
                        {item.cardTop}
                      </div>
                      <div className="max-w-100% h-100 mt-8 mb-5">
                        {/* <FormTable
                          lineChart={eval(item.cardItem) || "demo"}
                          id={item.cardTop}
                          logData={logData}
                        /> */}
                        <CustomFormTable data={eval(item.cardItem) || "demo"} />
                      </div>
                      <div className="flex-row float-left font-mono text-sm ">
                        {item.cardBottom}
                      </div>
                    </span>
                  </div>
                </>
              ) : eval(item.cardItem)[0].process === "sqlquery" ? (
                <>
                  <div>
                    <span
                      href="#"
                      className="block max-w-100% h-400 pb-6 p-1 bg-white border border-gray-100 rounded-lg dark:bg-gray-800 dark:border-gray-700"
                    >
                      <div className="flex-row float-left  font-mono text-sm">
                        {item.cardTop}
                      </div>
                      <div className="max-w-100% h-100 mt-8 mb-5">
                        <SqlDataTable
                          lineChart={eval(item.cardItem) || "demo"}
                          id={item.cardTop}
                          logData={logData}
                        />
                      </div>
                      <div className="flex-row float-left font-mono text-sm ">
                        {item.cardBottom}
                      </div>
                    </span>
                  </div>
                </>
              ) : (
                ""
              )}
            </div>
          );
        }
      })}
    </div>
  );
};

export default FixedCardItem;
