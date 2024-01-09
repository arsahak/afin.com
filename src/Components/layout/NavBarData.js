import React, { useState, useEffect, useContext } from "react";

// import { gql, useQuery, useMutation } from "@apollo/client";

// import {
//   TABLE_DATA_DETAIL,
//   GET_ALL_TABLE_DATA_QUERY,
// } from "../../GraphQL/Queries";

// import { CREATE_CRUD_INFO_MUTATION } from "../../GraphQL/Mutations";
import NavBar from "./NavBar";
import GetQueryRel from "../../GraphQLApiCall/GetQueryRel";
import GetAllTableData from "../../GraphQLApiCall/GetAllTableData";
import { UserContext } from "../../UseContext/UserContext";

const NavBarData = () => {
  // const {
  //   loading: card_data_loading,
  //   error: card_data_error,
  //   data: card_all_data,
  // } = useQuery(GET_ALL_TABLE_DATA_QUERY, {
  //   variables: { tableId: 534 },
  // });

  // const {
  //   loading: data_flow_loading,
  //   error: data_flow_error,
  //   data: data_flow,
  // } = useQuery(TABLE_DATA_DETAIL, {
  //   variables: { tableId: 544, tableColId: 1, tabRelId: "" },
  // });

  const pageList = GetQueryRel(560, 1, "");

  const user = GetAllTableData(1);

  const userDetails = eval(
    user?.all_table_data?.getDynamicTableField?.jsonData
  );

  const adminUserData = JSON.parse(
    localStorage.getItem("admin_user") || `{"demo":"1"}`
  );

  console.log("check user data 45", adminUserData);

  const { singIn } = useContext(UserContext);
  const [userId, setUserId] = useState("null");
  const [menuList, setMenuList] = useState([
    { name: "Home" },
    { name: "News" },
    { name: "Update" },
    { name: "Finance" },
  ]);

  useEffect(() => {
    if (adminUserData.user_flag === true) {
      userDetails?.map((item, i) => {
        if (adminUserData.user_email === item.email) {
          setUserId(item.user_id);
        }
      });
    }
  }, [userId, userDetails, adminUserData, singIn]);

  // const allCardData = eval(card_all_data?.getDynamicTableField?.jsonData);

  // let cardDataDic = "";
  // let subFlowDataSource = "";
  // let subFlowAction = "";

  // allCardData?.map((item1, i) => {
  //   if (item1.Card_Name === "signin form") {
  //     data_flow?.getTableDataRelIdInfo?.map((item2, j) => {
  //       let checkData = JSON.parse(item2.columnData);
  //       let flowchart = eval(item1.Card_Item);
  //       if (checkData.flowchart_name === flowchart[0].name) {
  //         subFlowDataSource = checkData.process_card_subflow;
  //         subFlowAction = checkData.process_card_attribute;
  //         cardDataDic = checkData.process_card_item;
  //       }
  //     });
  //   }
  // });

  useEffect(() => {
    pageList?.getTableDataRelIdInfo?.map((item, i) => {
      if (item.userId === userId) {
        let itemValue = eval(item?.columnData);
        setMenuList(itemValue);
      }
    });
  }, [userId, userDetails, adminUserData, singIn]);

  return (
    <div>
      <NavBar
        menuList={menuList}
        // subFlowDataSource={subFlowDataSource}
        // subFlowAction={subFlowAction}
        // cardDataDic={cardDataDic}
      />
    </div>
  );
};

export default NavBarData;
