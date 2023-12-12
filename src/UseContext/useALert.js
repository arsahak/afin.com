import React, { useState, useEffect } from "react";
import { exposeWorker } from "react-hooks-worker";
import { gql, useQuery, useMutation } from "@apollo/client";

import {
  TABLE_DATA_DETAIL,
  GET_TABLE_DATA_INFO,
  TABLE_DATA_BOX_DETAIL_REF,
} from "../GraphQL/Queries";

import { CREATE_CRUD_INFO_MUTATION } from "../GraphQL/Mutations";

const useALert = () => {
  const [notification, setNotification] = useState();

  const [createCrudInfo, { data }] = useMutation(CREATE_CRUD_INFO_MUTATION, {
    refetchQueries: [
      {
        query: TABLE_DATA_BOX_DETAIL_REF,
        variables: { tableId: 35, tableColId: 0, tableRefId: "" },
      },
    ],
  });

  useEffect(() => {
    const Web = () => {
      createCrudInfo({
        variables: {
          tableId: 35,
          tableColId: 1,
          tabRelId: "41",
          tableRefId: 41,
          columnData: notification,
          columnName: "notification",
          userId: "3",
        },
      });
    };

    exposeWorker(Web());
  }, [notification]);

  return { setNotification };
};

export default useALert;
