import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import { IconButton } from "@mui/material";
import {
  DataGrid,
  GridRowsProp,
  GridColDef,
  GridRowModes,
  GridActionsCellItem,
} from "@mui/x-data-grid";
import useMutationRel from "../../../GraphQLApiCall/useMutationRel";

const MasterDetails = ({ value }) => {
  const { setTableData, setTableId, setTableRel, setTableCol, data } =
    useMutationRel();

  const [valueOne, setValueOne] = useState("");
  const [valueTwo, setValueTwo] = useState("");

  const getUniqueId = () => `${+new Date()}`.slice(-9);
  let rows = [];
  const columns = [];

  const onMasterDltDataSave = () => {
    let uniqueId = getUniqueId();
    let jsonData = [
      {
        tableId: value.tableId,
        tableColId: value.col[0].colNo,
        tabRelId: uniqueId.toString(),
        tableRefId: uniqueId,
        columnData: valueOne,
        columnName: "",
        userId: "",
      },
    ];
    setTableData(jsonData);
    setTableId(value.sourceTwo);
    setTableRel("");
    setTableCol(1);
  };

  useEffect(() => {
    let uniqueId = getUniqueId();
    let jsonData = [
      {
        tableId: value.tableId,
        tableColId: value.col[1].colNo,
        tabRelId:
          data?.createMultipleDynamicTableData?.tableDataInfoType[0]
            ?.tableDataId,
        tableRefId: uniqueId,
        columnData: valueTwo,
        columnName: "",
        userId: "",
      },
    ];
    setTableData(jsonData);
    setTableId(value.sourceTwo);
    setTableRel("");
    setTableCol(1);
  }, [data?.createMultipleDynamicTableData?.tableDataInfoType[0]?.tableDataId]);

  // console.log("check value 53", );

  return (
    <div>
      <div className="">
        <div className="mb-2">
          <label
            htmlFor="input"
            className=" text-sm font-medium leading-6 text-gray-900 dark:text-white"
          >
            {value.labelOne || "label"}
          </label>
          <input
            type="text"
            name="input"
            id="input"
            className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="type..."
            value={valueOne}
            onChange={(e) => setValueOne(e.target.value)}
          />
        </div>
        <div className="mb-2">
          <label
            htmlFor="input"
            className=" text-sm font-medium leading-6 text-gray-900 dark:text-white"
          >
            {value.labelTwo || "label"}
          </label>
          <input
            type="text"
            name="input"
            id="input"
            className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="type..."
            value={valueTwo}
            onChange={(e) => setValueTwo(e.target.value)}
          />
        </div>
      </div>
      <Box
        sx={{
          height: 200,
          width: "100%",
          "& .super-app-theme--header": {
            backgroundColor: "rgba(255, 7, 0, 0.55)",
          },
        }}
      >
        <DataGrid
          hideFooter={true}
          rows={rows}
          columns={columns}
          rowHeight={16}
          headerHeight={16}
          sx={{
            ".MuiDataGrid-columnSeparator": {
              fontSize: "7px",
            },
            "&.MuiDataGrid-root": {
              fontSize: "7px",
            },
            boxShadow: 0,
            border: 0.5,
            borderColor: "white",
          }}
        />
      </Box>
      <button
        type="submit"
        class="py-2.5 px-5 text-xs font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 bg-black mt-3"
        onClick={onMasterDltDataSave}
      >
        Submit
      </button>
    </div>
  );
};

export default MasterDetails;
