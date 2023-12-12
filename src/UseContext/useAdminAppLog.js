import React, { useState, useEffect } from "react";
import { exposeWorker } from "react-hooks-worker";
import { gql, useQuery, useMutation } from "@apollo/client";

import { TABLE_DATA_DETAIL, GET_TABLE_DATA_INFO } from "../GraphQL/Queries";

import { APP_LOG_MUTATION } from "../GraphQL/Mutations";

const useAdminAppLog = () => {
  const [logData, setLogData] = useState();

  const [logMutationApp] = useMutation(APP_LOG_MUTATION);

  useEffect(() => {
    const AdminDataSave = () => {
      logMutationApp({
        variables: {
          logEvent: logData,
        },
      });
    };
    exposeWorker(AdminDataSave());
  }, [logData]);

  return { setLogData };
};

export default useAdminAppLog;
