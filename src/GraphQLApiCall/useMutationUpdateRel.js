import React, { useState, useEffect, useContext } from "react";
import { gql, useQuery, useMutation } from "@apollo/client";
import {
  TABLE_DATA_DETAIL,
  GET_ALL_TABLE_DATA_QUERY,
} from "../GraphQL/Queries";
import { TABLE_COLUMN_DATA_UPDATE } from "../GraphQL/Mutations";

const useMutationUpdateRel = () => {
  const [updateId, setUpdateId] = useState(0);
  const [updateData, setUpdateData] = useState("");
  const [tableUpdateId, setTableUpdateId] = useState(null);
  const [tableUpdateRelId, setTableUpdateRelId] = useState(null);
  const [tableUpdateColId, setTableUpdateColId] = useState(null);

  const [
    columnDataUpdate,
    { error: data_error, loading: data_loading, data: finalData },
  ] = useMutation(TABLE_COLUMN_DATA_UPDATE, {
    refetchQueries: [
      {
        query: TABLE_DATA_DETAIL,
        variables: {
          tableId: tableUpdateId,
          tableColId: tableUpdateColId,
          tabRelId: tableUpdateRelId,
        },
      },
      {
        query: GET_ALL_TABLE_DATA_QUERY,
        variables: {
          tableId: tableUpdateId,
        },
      },
    ],
  });

  useEffect(() => {
    if (updateId) {
      columnDataUpdate({
        variables: {
          id: updateId,
          columnData: updateData,
        },
      });
    }
  }, [updateId]);

  return {
    setUpdateId,
    setUpdateData,
    setTableUpdateId,
    setTableUpdateRelId,
    setTableUpdateColId,
  };
};

export default useMutationUpdateRel;
