import React, { useEffect, useState, useContext } from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import LineChartGraph from "../ChartData.js/LineChartGraph";
import TableData from "../ChartData.js/TableData";
import { gql, useQuery, useMutation } from "@apollo/client";

import { TABLE_DATA_DETAIL } from "../../../GraphQL/Queries";

import { TABLE_COLUMN_DATA_UPDATE } from "../../../GraphQL/Mutations";
import FormTable from "../ChartData.js/FormTable";
import SqlDataTable from "../ChartData.js/SqlDataTable";
import CustomFormTable from "../ChartData.js/CustomFormTable";
import CardFormDesign from "../ChartData.js/CardFormDesign";

const SortableItem = (props) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: props.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    width: "100%",
    height: "100%",
    // border: "2px solid red",
    // backgroundColor: "#cccccc",
    // margin: "10px",
    zIndex: isDragging ? "100" : "auto",
    opacity: isDragging ? 0.3 : 1,
  };

  const [columnDataUpdate] = useMutation(TABLE_COLUMN_DATA_UPDATE, {
    refetchQueries: [
      {
        query: TABLE_DATA_DETAIL,
        variables: { tableId: 534, tableColId: 0, tabRelId: "" },
      },
    ],
  });

  const handleDelete = (flagId) => {
    columnDataUpdate({
      variables: {
        id: flagId,
        columnData: false,
      },
    });
  };

  const [logData, setLogData] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setLogData(props.flagId);
    }, 1000);
  }, [props.flagId]);

  const [formSubmit, setFormSubmit] = useState(false);

  useEffect(() => {
    localStorage.setItem("userSortData", JSON.stringify(props.fixedValue));
  }, [props.flagId]);


  return (
    <>
      <div onClick={() => handleDelete(props.flagId)} className="h-[200px]">
        <div className="float-right bg-sky-500 hover:bg-sky-700  ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
        <div ref={setNodeRef} style={style}>
          <a
            {...listeners}
            {...attributes}
            href="#"
            className="block max-w-100% h-400 pb-6 p-1 bg-white border border-gray-100 rounded-lg dark:bg-gray-800 dark:border-gray-700"
          >
            <div className="max-w-100% h-400">
              <CardFormDesign fields={eval(props.items)} />
            </div>
          </a>
        </div>
      </div>
    </>
  );
};

export default SortableItem;
