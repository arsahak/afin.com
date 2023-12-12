import React from "react";
import CardPropatiesSelection from "./CardPropatiesSelection";
import GetQueryRel from "../../../GraphQLApiCall/GetQueryRel";

const CardBodyData = () => {
  const card_data = GetQueryRel(534, 0, "");

  let cardNameDic = [];
  let cardItemDic = [];
  let cardBottomDic = [];
  let cardTopDic = [];
  let cardSizeDic = [];
  let cardFlagDic = [];
  let cardIdDic = [];
  let cardMenuDic = [];

  card_data?.getTableDataRelIdInfo?.map((item, i) => {
    if (item.tableColId === 1) {
      cardNameDic.push({
        cardName: item.columnData,
        id: item.tableRefId,
        cardNameId: item.tableDataId,
      });
    }
    if (item.tableColId === 4) {
      cardItemDic.push({
        cardItem: item.columnData,
        id: item.tableRefId,
        cardItemId: item.tableDataId,
      });
    }
    if (item.tableColId === 3) {
      cardBottomDic.push({
        cardBottom: item.columnData,
        id: item.tableRefId,
        cardBottomId: item.tableDataId,
      });
    }
    if (item.tableColId === 2) {
      cardTopDic.push({
        cardTop: item.columnData,
        id: item.tableRefId,
        cardTopId: item.tableDataId,
      });
    }
    if (item.tableColId === 5) {
      cardSizeDic.push({
        cardSize: item.columnData,
        id: item.tableRefId,
        cardSizeId: item.tableDataId,
      });
    }
    if (item.tableColId === 6) {
      cardFlagDic.push({
        cardFlag: item.columnData,
        id: item.tableRefId,
        cardFlagId: item.tableDataId,
      });
    }
    if (item.tableColId === 7) {
      cardIdDic.push({
        cardId: item.columnData,
        id: item.tableRefId,
        cardDataId: item.tableDataId,
      });
    }
    if (item.tableColId === 8) {
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

  console.log("check item form design value 119", allCardData);

  return (
    <div>
      <CardPropatiesSelection allCardData={allCardData} />
    </div>
  );
};

export default CardBodyData;
