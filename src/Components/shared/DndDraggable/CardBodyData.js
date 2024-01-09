import React, { useContext, useState, useEffect } from "react";
import CardPropatiesSelection from "./CardPropatiesSelection";
import GetQueryRel from "../../../GraphQLApiCall/GetQueryRel";
import GetAllTableData from "../../../GraphQLApiCall/GetAllTableData";
import { UserContext } from "../../../UseContext/UserContext";

const CardBodyData = () => {
  const { singIn, setSignIn } = useContext(UserContext);
  const card_data = GetQueryRel(534, 0, "");
  const user = GetAllTableData(1);
  const [userId, setUserId] = useState("null");

  const userDetails = eval(
    user?.all_table_data?.getDynamicTableField?.jsonData
  );

  const adminUserData = JSON.parse(
    localStorage.getItem("admin_user") || `{"demo":"1"}`
  );

  useEffect(() => {
    if (adminUserData.user_flag === true) {
      userDetails?.map((item, i) => {
        if (adminUserData.user_email === item.email) {
          setUserId(item.user_id);
        }
      });
    }
  }, [userId, userDetails, adminUserData, singIn]);

  let cardNameDic = [];
  let cardItemDic = [];
  let cardBottomDic = [];
  let cardTopDic = [];
  let cardSizeDic = [];
  let cardFlagDic = [];
  let cardIdDic = [];
  let cardMenuDic = [];

  card_data?.getTableDataRelIdInfo?.map((item, i) => {
    if (item.tableColId === 1 && item.userId === userId) {
      cardNameDic.push({
        cardName: item.columnData,
        id: item.tableRefId,
        cardNameId: item.tableDataId,
        userId: item.userId,
      });
    }
    if (item.tableColId === 4 && item.userId === userId) {
      cardItemDic.push({
        cardItem: item.columnData,
        id: item.tableRefId,
        cardItemId: item.tableDataId,
      });
    }
    if (item.tableColId === 3 && item.userId === userId) {
      cardBottomDic.push({
        cardProcessname: item.columnData,
        id: item.tableRefId,
        cardProcessnameId: item.tableDataId,
      });
    }
    if (item.tableColId === 2 && item.userId === userId) {
      cardTopDic.push({
        cardFlowname: item.columnData,
        id: item.tableRefId,
        cardFlownameId: item.tableDataId,
      });
    }
    if (item.tableColId === 5 && item.userId === userId) {
      cardSizeDic.push({
        cardSize: item.columnData,
        id: item.tableRefId,
        cardSizeId: item.tableDataId,
      });
    }
    if (item.tableColId === 6 && item.userId === userId) {
      cardFlagDic.push({
        cardFlag: item.columnData,
        id: item.tableRefId,
        cardFlagId: item.tableDataId,
      });
    }
    if (item.tableColId === 7 && item.userId === userId) {
      cardIdDic.push({
        cardId: item.columnData,
        id: item.tableRefId,
        cardDataId: item.tableDataId,
      });
    }
    if (item.tableColId === 8 && item.userId === userId) {
      cardMenuDic.push({
        cardMenu: item.columnData,
        id: item.tableRefId,
        cardMenuDataId: item.tableDataId,
      });
    }
  });

  const mergeArrays = () => {
    return cardNameDic.map((item1) => {
      const mergedObject = { ...item1 };

      const item2 = cardSizeDic.find((item) => item.id === item1.id);
      if (item2) {
        Object.assign(mergedObject, item2);
      }

      const item3 = cardItemDic.find((item) => item.id === item1.id);
      if (item3) {
        Object.assign(mergedObject, item3);
      }

      const item4 = cardBottomDic.find((item) => item.id === item1.id);
      if (item4) {
        Object.assign(mergedObject, item4);
      }

      const item5 = cardTopDic.find((item) => item.id === item1.id);
      if (item5) {
        Object.assign(mergedObject, item5);
      }
      const item6 = cardFlagDic.find((item) => item.id === item1.id);
      if (item6) {
        Object.assign(mergedObject, item6);
      }
      const item7 = cardIdDic.find((item) => item.id === item1.id);
      if (item7) {
        Object.assign(mergedObject, item7);
      }

      const item8 = cardMenuDic.find((item) => item.id === item1.id);
      if (item8) {
        Object.assign(mergedObject, item8);
      }

      return mergedObject;
    });
  };

  const allCardData = mergeArrays();

  return (
    <div>
      <CardPropatiesSelection allCardData={allCardData} />
    </div>
  );
};

export default CardBodyData;
