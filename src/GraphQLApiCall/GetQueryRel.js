import React, { useEffect, useState } from "react";

import { gql, useQuery, useMutation } from "@apollo/client";
import { TABLE_DATA_DETAIL } from "../GraphQL/Queries";

const GetQueryRel = (id, col, rel) => {
  const {
    loading: data_loading,
    error: data_error,
    data: get_data,
  } = useQuery(TABLE_DATA_DETAIL, {
    variables: {
      tableId: id,
      tableColId: col,
      tabRelId: rel,
    },
  });

  return get_data;
};

export default GetQueryRel;
