import React, {
  useState,
  useEffect,
  useContext,
  Fragment,
  useRef,
} from "react";
import { Dialog, Transition } from "@headlessui/react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { gql, useQuery, useMutation } from "@apollo/client";

import {
  TABLE_DATA_DETAIL,
  GET_ALL_TABLE_COLUMN,
} from "../../../GraphQL/Queries";

import { CREATE_CRUD_INFO_MUTATION } from "../../../GraphQL/Mutations";
import useSQLChartRunData from "../../../UseContext/useSQLChartRunData";
import useChartRunData from "../../../UseContext/useChartRunData";
import PopupTableData from "./PopupTableData";

const FormTable = ({ lineChart, id, logData, formSubmit }) => {
  const {
    loading: data_flow_loading,
    error: data_flow_error,
    data: data_flow,
  } = useQuery(TABLE_DATA_DETAIL, {
    variables: { tableId: 544, tableColId: 1, tabRelId: "" },
  });

  const {
    loading: table_loading,
    error: table_error,
    data: table_data,
  } = useQuery(GET_ALL_TABLE_COLUMN);

  const [open, setOpen] = useState(false);

  const cancelButtonRef = useRef(null);

  const {
    source,
    sourceData,
    selectChart,
    setSelectChart,
    allChartData,
    setDataLog,
    getAllData,
  } = useChartRunData();

  const { selectChartSql, setSelectChartSql, sourceDataSql } =
    useSQLChartRunData();

  const [uniqueId, setUniqueId] = useState(Math.floor(Date.now() / 1000));
  let formItem = [];
  let formAttribute = "";
  let formSubFlow = "";
  let formSubFlowSource = "";

  data_flow?.getTableDataRelIdInfo?.map((item, i) => {
    let checkData = JSON.parse(item.columnData);
    // console.log("65", checkData);
    if (checkData.flowchart_name === lineChart[0].name) {
      formItem = JSON.parse(checkData.process_card_item);
      formAttribute = checkData.process_card_attribute;
      formSubFlow = checkData.process_card_subflow;
      formSubFlowSource = checkData.process_subflow_source;
    }
  });

  const [createCrudInfo] = useMutation(CREATE_CRUD_INFO_MUTATION, {
    // refetchQueries: [
    //   {
    //     query: NEW_TABLE_DATA_REF_QUERY,
    //     variables: { tableId: 471, tableColId: 1, tableRefId: 0 },
    //   },
    // ],
  });

  useEffect(() => {
    setTimeout(() => {
      setDataLog(selectChart);
    }, 1000);
  }, [selectChart]);

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
    if (formAttribute === "mutation") {
      eval(table_data?.getAllTableColumn?.jsonData)?.map((item, i) => {
        if (item.table === formSubFlowSource) {
          item.column?.map((col, j) => {
            createCrudInfo({
              variables: {
                tableId: item.id,
                tableColId: col.no,
                tabRelId: "",
                tableRefId: uniqueId,
                columnData: input0,
                columnName: col.name,
                userId: "",
              },
            });
          });
        }
      });
    }
    if (formAttribute === "popup") {
      if (formSubFlow === "linechartbar") {
        setSelectChart(formSubFlow);
        setOpen(true);
      } else if (formSubFlow === "sqlquery") {
        setSelectChartSql(formSubFlow);
        console.log("This is popup sqlquery ", sourceDataSql);
      }
    }
    if (formAttribute === "fire card") {
      console.log("This is card fire");
    }
  };

  let filterDic = [];

  useEffect(() => {
    const concatenatedData = [].concat(...sourceData);
    const filteredItems = concatenatedData?.filter((item, i) => {
      const year = new Date(item.Date).getFullYear();
      return year === parseInt(search0);
    });
    setPopupShow(filteredItems);
  }, [sourceData]);

  return (
    <Box
      sx={{
        display: "block",
        padding: 1,
        width: "100%",
        height: 275,
      }}
    >
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          initialFocus={cancelButtonRef}
          onClose={setOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                  <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                    <div className="sm:flex sm:items-start">
                      <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                        <div className="mt-2 w-[450px]">
                          <PopupTableData dataSource={popupShow} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                    <button
                      type="button"
                      className="inline-flex w-full justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-800 sm:ml-3 sm:w-auto"
                      onClick={() => setOpen(false)}
                    >
                      Hide
                    </button>
                    {/* <button
                      type="button"
                      className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                      onClick={() => setOpen(false)}
                      ref={cancelButtonRef}
                    >
                      Cancel
                    </button> */}
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
      {formItem.map((form, i) => {
        if (form.item === "input") {
          return (
            <>
              <label className="text-xs font-normal block ml-1">
                {form.label}
              </label>
              <input
                type="text"
                name="price"
                id="price"
                className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 mb-3"
                placeholder=""
                value={eval("input" + i)}
                onChange={(e) => eval("setInput" + i)(e.target.value)}
              />
            </>
          );
        }
        if (form.item === "checkbox") {
          return (
            <div class="flex items-center mb-2 mt-5">
              <input
                id="checked-checkbox"
                type="checkbox"
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                value={"checkboxtrue"}
                onChange={(e) => eval("setCheckbox" + i)(e.target.value)}
              />
              <label
                for="checked-checkbox"
                class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Checkbox
              </label>
            </div>
          );
        }
        if (form.item === "search") {
          return (
            <Paper
              component="form"
              sx={{
                p: "2px 4px",
                display: "flex",
                alignItems: "center",
                width: "100%",
              }}
            >
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search..."
                inputProps={{ "aria-label": "search google maps" }}
                value={eval("search" + i)}
                onChange={(e) => eval("setSearch" + i)(e.target.value)}
              />
              <IconButton type="button" sx={{ p: "5px" }} aria-label="search">
                <SearchIcon />
              </IconButton>
            </Paper>
          );
        }
        if (form.item === "button") {
          return (
            <button
              class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-1 px-[172px] border border-gray-400 rounded mt-5"
              onClick={onActionButton}
            >
              Submit
            </button>
          );
        }
      })}
    </Box>
  );
};

export default FormTable;
