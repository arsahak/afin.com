import React, { useState, useContext } from "react";
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
import CloseIcon from "@mui/icons-material/Close";

import { CodeSharp } from "@material-ui/icons";
import { IconButton } from "@mui/material";

import { gql, useQuery, useMutation } from "@apollo/client";

import {
  NEW_TABLE_DATA_REF_QUERY,
  TABLE_DATA_DETAIL,
  GET_ALL_TABLE_DATA_QUERY,
} from "../../../GraphQL/Queries";

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
    },
    title: {
      display: true,
      text: "Chart.js Line Chart",
    },
  },
};

const LineChartShow = ({ dataSource }) => {
  const {
    loading: flow_card_data_loading,
    error: flow_card_data_error,
    data: flow_card_data,
  } = useQuery(TABLE_DATA_DETAIL, {
    variables: { tableId: 544, tableColId: 1, tabRelId: "" },
  });

  function getRandomColor() {
    // Generate random values for red, green, and blue channels
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    // Create a color string in the format "#RRGGBB"
    const color = `#${red.toString(16)}${green.toString(16)}${blue.toString(
      16
    )}`;

    return color;
  }

  const myDataDic = [];
  const labels = [];

  console.log("data8552hfgh", dataSource);

  const marDatavalue = [];

  for (let i = 0; i < dataSource?.length; i++) {
    myDataDic.push(
      {
        label: "demo",
        data: dataSource[i]?.data?.map((item1, k) => item1.High),
        borderColor: getRandomColor(),
        backgroundColor: getRandomColor(),
      }
      // {
      //   label: "Source High File " + eval(i + 1),
      //   data: sourceData[i]?.edit?.map((item1, k) => item1.High),
      //   borderColor: getRandomColor(),
      //   backgroundColor: getRandomColor(),
      // }
    );
  }

  console.log("data", marDatavalue);

  const label = dataSource[0]?.data?.map((item1, k) => item1.Date);

  const dataValue = [];
  const data = {
    labels: label,
    datasets: myDataDic,
  };
  return (
    <div style={{ height: 350, width: 900 }}>
      <Line options={options} data={data} />
    </div>
  );
};

export default LineChartShow;
