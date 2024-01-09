import React, { useState, useEffect, useContext } from "react";
import { gql, useQuery, useMutation } from "@apollo/client";
import {
  TABLE_DATA_DETAIL,
  GET_ALL_TABLE_DATA_QUERY,
} from "../GraphQL/Queries";
import { CREATE_MULTIPLE_DYNAMIC_TABLE_DATA } from "../GraphQL/Mutations";

const useMutationRel = () => {
  const [tableId, setTableId] = useState(null);
  const [tableRel, setTableRel] = useState(null);
  const [tableCol, setTableCol] = useState(null);
  const [tableData, setTableData] = useState([]);

  const [createMultipleDynamicTableData] = useMutation(
    CREATE_MULTIPLE_DYNAMIC_TABLE_DATA,
    {
      refetchQueries: [
        {
          query: TABLE_DATA_DETAIL,
          variables: {
            tableId: tableId,
            tableColId: tableCol,
            tabRelId: tableRel,
          },
        },
        {
          query: GET_ALL_TABLE_DATA_QUERY,
          variables: {
            tableId: tableId,
          },
        },
      ],
    }
  );

  useEffect(() => {
    if (tableData.length > 0) {
      createMultipleDynamicTableData({
        variables: {
          tableDataList: tableData,
        },
      });
    }
  }, [tableData]);

  return {
    setTableData,
    setTableId,
    setTableRel,
    setTableCol,
  };
};

export default useMutationRel;
