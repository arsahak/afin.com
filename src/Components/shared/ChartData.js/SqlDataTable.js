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
import axios from "axios";
import Papa from "papaparse";
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

const SqlDataTable = ({ lineChart, id, logData }) => {
  const {
    loading: flow_card_data_loading,
    error: flow_card_data_error,
    data: flow_card_data,
  } = useQuery(TABLE_DATA_DETAIL, {
    variables: { tableId: 544, tableColId: 1, tabRelId: "" },
  });

  const [selectChart, setSelectChart] = useState("");
  const [source, setSource] = useState([]);
  const [sourceData, setSourceData] = useState([]);
  const [data, setData] = useState("");

  const {
    loading: all_data_flow_loading,
    error: all_data_flow_error,
    data: all_data_flow,
  } = useQuery(GET_ALL_TABLE_DATA_QUERY, {
    variables: { tableId: 536 },
  });

  const allChartData = eval(all_data_flow?.getDynamicTableField?.jsonData);

  console.log("check data value 86", allChartData, flow_card_data, lineChart);

  useEffect(() => {
    let sqlData = "";
    flow_card_data?.getTableDataRelIdInfo?.map((item, i) => {
      let checkData = JSON.parse(item.columnData);
      if (checkData.flowchart_name === lineChart[0].name) {
        sqlData = checkData.process_sql;
      }
    });
    const url = "https://itb-usa.a2hosted.com/account/query-json-file/";
    const data = {
      Query: sqlData,
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
  }, [lineChart]);

  function convertCSVtoJSON(csvData) {
    const blob = new Blob([csvData], { type: "text/csv" });
    const reader = new FileReader();

    reader.onload = (event) => {
      const parsedData = Papa.parse(event.target.result, {
        header: true,
        dynamicTyping: true,
      });
      setSourceData(parsedData.data);
    };

    reader.readAsText(blob);
  }

  useEffect(() => {
    // setTimeout(() => {
    convertCSVtoJSON(data);
    // }, 1000);
  }, [data]);

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
        <DataGrid
          hideFooter={true}
          rows={rows}
          columns={columns}
          rowHeight={20}
          headerHeight={20}
          sx={{
            ".MuiDataGrid-columnSeparator": {
              fontSize: "12px",
            },
            "&.MuiDataGrid-root": {
              fontSize: "12px",
            },
          }}
        />
      </div>
    </>
  );
};

export default SqlDataTable;
