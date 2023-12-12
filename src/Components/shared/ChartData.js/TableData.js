import React, { useState, useEffect, useContext } from "react";
import {
  DataGrid,
  GridRowsProp,
  GridColDef,
  GridActionsCellItem,
} from "@mui/x-data-grid";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { exposeWorker } from "react-hooks-worker";
import { gql, useQuery, useMutation } from "@apollo/client";

import {
  NEW_TABLE_DATA_REF_QUERY,
  TABLE_DATA_DETAIL,
  GET_ALL_TABLE_DATA_QUERY,
} from "../../../GraphQL/Queries";
import { Button } from "@mui/material";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
      display: false,
      legend: false,
    },
    // title: {
    //   display: true,
    //   text: "Chart.js Line Chart",
    // },
  },
  type: "line",
  scales: {
    x: {
      display: false,
    },
  },
};

const TableData = ({ lineChart, id, logData }) => {
  const [selectChart, setSelectChart] = useState("");
  const [source, setSource] = useState([]);
  const [sourceData, setSourceData] = useState([]);

  const {
    loading: all_data_flow_loading,
    error: all_data_flow_error,
    data: all_data_flow,
  } = useQuery(GET_ALL_TABLE_DATA_QUERY, {
    variables: { tableId: 536 },
  });

  const allChartData = eval(all_data_flow?.getDynamicTableField?.jsonData);

  useEffect(() => {
    let mergeValue = [];
    let mergeValueFilter = [];
    let allFileName = "";
    let filter = "";
    let logic = "";
    let filtercon = "";
    let filterval = "";
    var myvalue = "";

    allChartData?.map((item, i) => {
      if (item.Process_Name === lineChart[0]) {
        allFileName = item.Process_File;
        filter = item.Process_Filter;
        logic = item.Process_Logic;
        filtercon = item.Process_Condition;
        filterval = item.Filter_Condition_Value;
      }
    });

    eval(allFileName)?.map((item, i) => {
      const a = "a";
      const apiUrl =
        "https://itb-usa.a2hosted.com/media/upload_file/yahoo_finance_hist/" +
        item.toString();
      const intCode = new Function(a, logic);
      const codeResult = intCode(apiUrl);

      const myPromise = new Promise((resolve, reject) => {
        // Simulate an asynchronous operation
        resolve(codeResult);
      });

      myPromise.then((value) => {
        // console.log(value); // This will log "Value from the Promise"
        mergeValue.push(value);
        setSource(mergeValue);
      });

      // function initPromise() {
      //   return new Promise(function (res, rej) {
      //     res(codeResult);
      //   });
      // }
      // initPromise().then(function (result) {
      //   mergeValue.push(result);
      //   setSource(mergeValue);
      // });
    });

    source?.map((item2, i) => {
      const intFilter = new Function(
        "condition",
        "conditionvalue",
        "dataset",
        filter
      );
      const filterData = intFilter(filtercon, filterval, item2);
      mergeValueFilter.push(filterData);
      setSourceData(mergeValueFilter);
    });
  }, [lineChart, id, logData]);

  const concatenatedData = [].concat(...sourceData);

  const columns = [
    { field: "date", headerName: "Date", width: 160 },
    { field: "max", headerName: "Max High", width: 130 },
    { field: "min", headerName: "Min Low", width: 130 },
  ];

  const rows = concatenatedData.map((item, i) => {
    return {
      id: i,
      date: item.Date,
      max: item.High,
      min: item.Low,
    };
  });

  return (
    <>
      <div style={{ height: 275, width: "100%" }}>
        <DataGrid hideFooter={true} rows={rows} columns={columns} />
      </div>
    </>
  );
};

export default TableData;
