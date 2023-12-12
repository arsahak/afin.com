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
import useChartRunData from "../../../UseContext/useChartRunData";

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
      point: false,
    },
    title: {
      display: true,
      text: "Chart.js Line Chart",
    },
  },
  tooltips: {
    enabled: false, // Hide tooltips (labels)
  },
};

const ChartData = () => {
  const { source, sourceData, setSelectChart } = useChartRunData();

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

  const marDatavalue = [];

  for (let i = 0; i < source?.length; i++) {
    myDataDic.push(
      {
        label: "demo",
        data: source[i]?.data?.map((item1, k) => item1.High),
        borderColor: getRandomColor(),
        backgroundColor: getRandomColor(),
        borderWidth: 1,
        tension: 0.1,
        point: false,
        pointRadius: 0,
      }
      // {
      //   label: "Source High File " + eval(i + 1),
      //   data: sourceData[i]?.edit?.map((item1, k) => item1.High),
      //   borderColor: getRandomColor(),
      //   backgroundColor: getRandomColor(),
      // }
    );
  }

  const label = source[0]?.data?.map((item1, k) => item1.Date);

  const dataValue = [];
  const data = {
    labels: label,
    datasets: myDataDic,
  };
  return (
    <div>
      <button onClick={() => setSelectChart("LineBarChart")}>Submit</button>
      <Line
        options={options}
        data={data}
        style={{ height: 400, width: 1200 }}
      />
    </div>
  );
};

export default ChartData;
