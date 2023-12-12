import React, { useEffect, useState } from "react";
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
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import DialogTitle from "@mui/material/DialogTitle";
import Box from "@mui/material/Box";
import { IconButton } from "@mui/material";
import {
  DataGrid,
  GridRowsProp,
  GridColDef,
  GridRowModes,
  GridActionsCellItem,
} from "@mui/x-data-grid";
import { gql, useQuery, useMutation } from "@apollo/client";
import { CREATE_CRUD_INFO_MUTATION } from "../../../GraphQL/Mutations";
import GetQueryRel from "../../../GraphQLApiCall/GetQueryRel";

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

const labels = ["January", "February", "March", "April", "May", "June", "July"];

const data1 = [
  15, 26, 17, 32, 59, 54, 45, 15, 26, 17, 32, 59, 62, 38, 45, 54, 45,
];

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: data1.map((item) => item),
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
      borderWidth: 1,
      tension: 0.1,
      point: false,
      pointRadius: 0,
    },
  ],
};

const CustomFormTable = ({ data }) => {
  const [fields, setFields] = useState([]);
  const [formsData, setFormData] = useState([]);
  const tableData = GetQueryRel(544, 1, "");

  useEffect(() => {
    tableData?.getTableDataRelIdInfo?.map((item, i) => {
      let itemData = JSON.parse(item?.columnData) || "";
      if (itemData?.flowchart_name === data[0]?.name) {
        setFields(itemData.formDesign);
        setFormData(itemData);
        // console.log("check ata", itemData?.flowchart_name, data[0]?.name);
      }
    });
  }, [data]);

  let formSize = "sm";

  console.log("check data value", formsData);

  const [createCrudInfo] = useMutation(CREATE_CRUD_INFO_MUTATION);

  const [popupShow, setPopupShow] = useState(false);
  const [input0, setInput0] = useState("");
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [checkbox0, setCheckbox0] = useState("");
  const [checkbox1, setCheckbox1] = useState("");
  const [checkbox2, setCheckbox2] = useState("");
  const [search0, setSearch0] = useState("");
  const [search1, setSearch1] = useState("");
  const [search2, setSearch2] = useState("");

  const onActionButton = () => {
    if (formsData.action === "mutation") {
      createCrudInfo({
        variables: {
          tableId: formsData.tableId,
          tableColId: 1,
          tabRelId: "",
          tableRefId: 12,
          columnData: input0,
          columnName: "demo data",
          userId: "",
        },
      });
    }
    // if (formAttribute === "mutation") {
    //   eval(table_data?.getAllTableColumn?.jsonData)?.map((item, i) => {
    //     if (item.table === formSubFlowSource) {
    // item.column?.map((col, j) => {
    //   createCrudInfo({
    //     variables: {
    //       tableId: item.id,
    //       tableColId: col.no,
    //       tabRelId: "",
    //       tableRefId: uniqueId,
    //       columnData: input0,
    //       columnName: col.name,
    //       userId: "",
    //     },
    //   });
    // });
    //     }
    //   });
    // }
    // if (formAttribute === "popup") {
    //   if (formSubFlow === "linechartbar") {
    //     setSelectChart(formSubFlow);
    //     setOpen(true);
    //   } else if (formSubFlow === "sqlquery") {
    //     setSelectChartSql(formSubFlow);
    //     console.log("This is popup sqlquery ", sourceDataSql);
    //   }
    // }
    // if (formAttribute === "fire card") {
    //   console.log("This is card fire");
    // }
  };

  let filterDic = [];

  // useEffect(() => {
  //   const concatenatedData = [].concat(...sourceData);
  //   const filteredItems = concatenatedData?.filter((item, i) => {
  //     const year = new Date(item.Date).getFullYear();
  //     return year === parseInt(search0);
  //   });
  //   setPopupShow(filteredItems);
  // }, [sourceData]);

  return (
    <div>
      <div className="max-w-[100%] min-h-[500px] p-1 block">
        <div>
          {fields?.map((item, i) => {
            if (item.type === "input") {
              const value = JSON.parse(item.style);
              return (
                <div className="mb-2">
                  <label
                    htmlFor="input"
                    className="block text-xs font-medium leading-6 text-gray-900 pl-4"
                  >
                    {value.name || "input"}
                  </label>
                  <input
                    required
                    type="text"
                    name="input"
                    id="input"
                    className={`block w-full rounded-md border-0 py-1.5 pl-2 pr-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xs sm:leading-6 m-2 
                    `}
                    placeholder="type..."
                    value={eval("input" + i)}
                    onChange={(e) => eval("setInput" + i)(e.target.value)}
                  />
                </div>
              );
            } else if (item.type === "textarea") {
              var value = JSON.parse(item.style);
              return (
                <div className="mb-2">
                  <label
                    htmlFor="input"
                    className="block text-xs font-medium leading-6 text-gray-900 pl-4"
                  >
                    {value.textLabel || "input"}
                  </label>
                  <textarea
                    rows="3"
                    type="text"
                    name="textarea"
                    id="textarea"
                    className={`block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 m-2`}
                    placeholder="type..."
                  />
                </div>
              );
            } else if (item.type === "text") {
              var value = JSON.parse(item.style);
              return (
                <Box>
                  <div className="mb-2 block">
                    <p
                      className={`block text-slate-900 m-2 
                        ${
                          value.textStyle === "h1"
                            ? "text-9xl"
                            : value.textStyle === "h2"
                            ? "text-7xl"
                            : value.textStyle === "h3"
                            ? "text-5xl"
                            : value.textStyle === "h4"
                            ? "text-5xl"
                            : value.textStyle === "h5"
                            ? "text-2xl"
                            : value.textStyle === "h6"
                            ? "text-lg"
                            : "text-sm"
                        }
                        `}
                    >
                      {value.textValue || "This text is in the blue color"}
                    </p>
                  </div>
                </Box>
              );
            } else if (item.type === "button") {
              var value = JSON.parse(item.style);
              return (
                <div className="mb-2">
                  <button
                    className={`bg-slate-900 hover:bg-blue-700 text-white font-normal py-2 px-4 rounded m-2 block 
                    `}
                    onClick={onActionButton}
                  >
                    {value.name || "button"}
                  </button>
                </div>
              );
            } else if (item.type === "contactform") {
              var value = JSON.parse(item.style);
              return (
                <section
                  class={` bg-white dark:bg-gray-900 className="mb-2 w-full" 
                   
                   `}
                >
                  <div class="py-2 lg:py-4 px-2 mx-auto max-w-screen-md">
                    <h2 class="mb-4 text-[22px] tracking-tight font-medium text-center text-gray-900 dark:text-white">
                      {value.title || "Contact Form"}
                    </h2>
                    <form action="#" class="space-y-8">
                      <div>
                        <label
                          for="email"
                          class="block mb-2 text-xs font-medium text-gray-900 dark:text-gray-300"
                        >
                          {value.name || "email"}
                        </label>
                        <input
                          type="email"
                          id="email"
                          class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                          placeholder="name@flowbite.com"
                          required
                        />
                      </div>
                      <div>
                        <label
                          for="subject"
                          class="block mb-2 text-xs font-medium text-gray-900 dark:text-gray-300"
                        >
                          {value.email || "Subject"}
                        </label>
                        <input
                          type="text"
                          id="subject"
                          class="block p-2 w-full text-xs text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                          placeholder="Let us know how we can help you"
                          required
                        />
                      </div>
                      <div class="sm:col-span-2">
                        <label
                          for="message"
                          class="block mb-2 text-xs font-medium text-gray-900 dark:text-gray-400"
                        >
                          {value.message || "Message"}
                        </label>
                        <textarea
                          id="message"
                          rows="6"
                          class="block p-2 w-full text-xs text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                          placeholder="Leave a comment..."
                        ></textarea>
                      </div>
                      <button
                        type="submit"
                        className={`py-2.5 px-5 text-xs font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 bg-black flex items-center justify-center
            
                      `}
                      >
                        {value.button || "Button"}
                      </button>
                    </form>
                  </div>
                </section>
              );
            } else if (item.type === "box") {
              var value = JSON.parse(item.style);

              return (
                <>
                  <div
                    className={` text-white p-3 flex items-center justify-center 
                      
                     `}
                    // className="text-white p-3 bg-[${value.color}] w-[300px], h-[200px]"
                    style={{
                      width: value.width || "350px",
                      height: value.height || "50px",
                      backgroundColor: value.color || "green",
                    }}
                  >
                    <p>{value.text}</p>
                  </div>
                </>
              );
            } else if (item.type === "box") {
              var value = JSON.parse(item.style);

              return (
                <div className="m-3">
                  <div
                    className={` text-white p-3 flex items-center justify-center`}
                    // className="text-white p-3 bg-[${value.color}] w-[300px], h-[200px]"
                    style={{
                      maxWidth: value.width || "350px",
                      height: value.height || "50px",
                      backgroundColor: value.color || "green",
                    }}
                  >
                    <p>{value.text}</p>
                  </div>
                </div>
              );
            } else {
              return <>No form Item</>;
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default CustomFormTable;
