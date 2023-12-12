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
import useChartRunData from "../../../UseContext/useChartRunData";

import { makeStyles } from "@mui/styles";

const PopupTableData = ({ dataSource }) => {
  const {
    source,
    sourceData,
    selectChart,
    allChartData,
    setSelectChart,
    setDataLog,
  } = useChartRunData();

  console.log("data s", dataSource);

  const concatenatedData = [].concat(...dataSource);

  const columns = [
    {
      field: "date",
      headerName: "Date",
      width: 120,
      headerClassName: "super-app-theme--header",
    },
    { field: "max", headerName: "Max High", width: 120 },
    { field: "min", headerName: "Min Low", width: 120 },
  ];

  const rows = concatenatedData.map((value, i) => {
    return {
      id: i,
      date: value.Date,
      max: value.High,
      min: value.Low,
    };
  });

  return (
    <>
      <div
        style={{
          height: 220,
          width: "100%",
          marginRight: 10,
          marginTop: 5,
          "& .super-app-theme--header": {
            backgroundColor: "rgba(255, 7, 0, 0.55)",
          },
        }}
      >
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

export default PopupTableData;
