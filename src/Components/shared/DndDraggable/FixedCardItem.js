import React, { useEffect, useState, useContext } from "react";
import LineChartGraph from "../ChartData.js/LineChartGraph";
import TableData from "../ChartData.js/TableData";
import FormTable from "../ChartData.js/FormTable";
import { UserContext } from "../../../UseContext/UserContext";
import SqlDataTable from "../ChartData.js/SqlDataTable";
import CustomFormTable from "../ChartData.js/CustomFormTable";
import CardFormDesign from "../ChartData.js/CardFormDesign";

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

  console.log("check item 25", items);

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
              <div>
                <a
                  href="#"
                  className="block max-w-100% h-400 pb-6 p-1 bg-white border border-gray-100 rounded-lg dark:bg-gray-800 dark:border-gray-700"
                >
                  <div className="max-w-100% h-100 mt-20 mb-10">
                    <CardFormDesign fields={eval(item.cardItem)} />
                  </div>
                </a>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
};

export default FixedCardItem;
