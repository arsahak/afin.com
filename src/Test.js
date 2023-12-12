import React, { useState } from "react";

import { gql, useQuery, useMutation } from "@apollo/client";

import { TABLE_DATA_DETAIL } from "./GraphQL/Queries";

import { CREATE_CRUD_INFO_MUTATION } from "./GraphQL/Mutations";
import axios from "axios";

function Test() {
  const {
    loading: card_loading,
    error: card_error,
    data: card_data,
  } = useQuery(TABLE_DATA_DETAIL, {
    variables: { tableId: 542, tableColId: 2, tabRelId: "" },
  });

  const [data, setData] = useState([]);

  const [createCrudInfo] = useMutation(CREATE_CRUD_INFO_MUTATION);

  const slqQuery =
    "SELECT Date, High, Low FROM AAOI.json WHERE Date between 2023-10-08 and 2022-10-07 ORDER BY High";

  const onSubmit = () => {
    // const url = "https://itb-usa.a2hosted.com/account/query-json-file/";
    // const data = {
    //   Query: slqQuery,
    //   table_data_id: 49213,
    //   json_file: [],
    // };
    // axios
    //   .post(url, data, {
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //   })
    //   .then((response) => {
    //     setData(response.data.data);
    //   })
    //   .catch((error) => {
    //     setData({ responseData: null, error: error.message });
    //   });
  };

  console.log("check 48", data);

  return (
    <div>
      Check Data
      <button onClick={onSubmit}>Submit</button>
    </div>
  );
}

export default Test;
