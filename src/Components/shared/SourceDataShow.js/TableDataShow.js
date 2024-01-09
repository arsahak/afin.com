import React, { useState, useEffect } from "react";

import axios from "axios";
import Papa from "papaparse";
import GetQueryRel from "../../../GraphQLApiCall/GetQueryRel";

const TableDataShow = ({ flowName }) => {
  const [data, setData] = useState([]);
  const [sqlData, setSqlData] = useState([]);

  const get_data = GetQueryRel(544, 1, "");

  useEffect(() => {
    get_data?.getTableDataRelIdInfo?.map((item, i) => {
      let itemData = JSON.parse(item?.columnData) || "";
      console.log("check item data show 16", itemData);

      if (itemData.flowchart_name === flowName) {
        const url = "https://itb-usa.a2hosted.com/account/query-json-file/";
        const data = {
          Query:
            "SELECT Date, High, Low FROM AAOI.json WHERE Date between 2023-10-08 and 2022-10-07 ORDER BY High",
          table_data_id: 49213,
          json_file: [],
        };

        axios
          .post(url, data, {
            headers: {
              "Content-Type": "application/json",
            },
          })
          .then((response) => {
            setData(response.data.data);
          })
          .catch((error) => {
            setData({ responseData: null, error: error.message });
          });
      }
    });
  }, [flowName]);

  function convertCSVtoJSON(csvData) {
    const blob = new Blob([csvData], { type: "text/csv" });
    const reader = new FileReader();

    reader.onload = (event) => {
      const parsedData = Papa.parse(event.target.result, {
        header: true,
        dynamicTyping: true,
      });
      setSqlData(parsedData.data);
      //   setTimeout(() => {
      //     setProcessData(parsedData.data);
      //   }, 2000);
    };

    reader.readAsText(blob);
  }

  useEffect(() => {
    convertCSVtoJSON(data);
  }, [data]);

  function getHeadings(data) {
    return Object.keys(data[0] || [{ "loading...": "" }]).map((key) => {
      return (
        <th
          scope="col"
          class=" py-2 px-0 fixed-top position-sticky bg-slate-100"
        >
          {key}
        </th>
      );
    });
  }

  function getRows(data) {
    return data.map((obj) => {
      return (
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
          {getCells(obj)}
        </tr>
      );
    });
  }

  function getCells(obj) {
    return Object.values(obj).map((value) => {
      return <td>{value}</td>;
    });
  }

  return (
    <>
      <div className="relative overflow-x-scroll w-full h-[300px] border ">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className=" text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            {getHeadings(sqlData)}
          </thead>
          <tbody>{getRows(sqlData)}</tbody>
        </table>
      </div>
    </>
  );
};

export default TableDataShow;
