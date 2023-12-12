import React, { useState, useEffect, useContext } from "react";
import { gql, useQuery, useMutation } from "@apollo/client";
import { TABLE_DATA_DETAIL } from "../GraphQL/Queries";
import { TABLE_COLUMN_DATA_DELETE } from "../GraphQL/Mutations";

const useMutationDeletedRel = () => {
  const [deletedId, setDeletedId] = useState(0);
  const [tableDeletedId, setTableDeletedId] = useState(null);
  const [tableDeletedRelId, setTableDeletedRelId] = useState(null);
  const [tableDeletedColId, setTableDeletedColId] = useState(null);

  const [
    columnDataDelete,
    { error: data_error, loading: data_loading, data: finalData },
  ] = useMutation(TABLE_COLUMN_DATA_DELETE, {
    refetchQueries: [
      {
        query: TABLE_DATA_DETAIL,
        variables: {
          tableId: tableDeletedId,
          tableColId: tableDeletedColId,
          tabRelId: tableDeletedRelId,
        },
      },
    ],
  });

  useEffect(() => {
    if (deletedId) {
      columnDataDelete({
        variables: {
          id: deletedId,
        },
      });
    }
  }, [deletedId]);

  return {
    setDeletedId,
    setTableDeletedId,
    setTableDeletedRelId,
    setTableDeletedColId,
  };
};

export default useMutationDeletedRel;
