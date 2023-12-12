import React from "react";

import { gql, useQuery, useMutation } from "@apollo/client";

import {
  TABLE_DATA_DETAIL,
  GET_ALL_TABLE_DATA_QUERY,
} from "../../GraphQL/Queries";

import { CREATE_CRUD_INFO_MUTATION } from "../../GraphQL/Mutations";
import NavBar from "./NavBar";

const NavBarData = () => {
  const {
    loading: card_data_loading,
    error: card_data_error,
    data: card_all_data,
  } = useQuery(GET_ALL_TABLE_DATA_QUERY, {
    variables: { tableId: 534 },
  });

  const {
    loading: data_flow_loading,
    error: data_flow_error,
    data: data_flow,
  } = useQuery(TABLE_DATA_DETAIL, {
    variables: { tableId: 544, tableColId: 1, tabRelId: "" },
  });

  const allCardData = eval(card_all_data?.getDynamicTableField?.jsonData);

  let cardDataDic = "";
  let subFlowDataSource = "";
  let subFlowAction = "";
  let menuList = [];

  allCardData?.map((item1, i) => {
    if (item1.Card_Name === "signin form") {
      data_flow?.getTableDataRelIdInfo?.map((item2, j) => {
        let checkData = JSON.parse(item2.columnData);
        let flowchart = eval(item1.Card_Item);
        if (checkData.flowchart_name === flowchart[0].name) {
          subFlowDataSource = checkData.process_card_subflow;
          subFlowAction = checkData.process_card_attribute;
          cardDataDic = checkData.process_card_item;
        }
      });
    }
  });

  data_flow?.getTableDataRelIdInfo?.map((item2, j) => {
    let checkData = JSON.parse(item2?.columnData);
    if (checkData.process_name === "menucard") {
      menuList = JSON.parse(checkData.process_menu_item);
    }
  });

  console.log("check data card data", cardDataDic);

  return (
    <div>
      <NavBar
        menuList={menuList}
        subFlowDataSource={subFlowDataSource}
        subFlowAction={subFlowAction}
        cardDataDic={cardDataDic}
      />
    </div>
  );
};

export default NavBarData;
