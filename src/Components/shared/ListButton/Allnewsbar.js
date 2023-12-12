import React, { useState, useContext } from "react";
import { UserContext } from "../../../UseContext/UserContext";
import ListButton from "./ListButton";

// import { gql, useQuery, useMutation } from "@apollo/client";
// import { TABLE_DATA_DETAIL } from "../../../GraphQL/Queries";
// import { TABLE_COLUMN_DATA_UPDATE } from "../../../GraphQL/Mutations";
import useMutationUpdateRel from "../../../GraphQLApiCall/useMutationUpdateRel";

const AllNewsBar = ({ allCardData }) => {
  const {
    setUpdateId,
    setUpdateData,
    setTableUpdateId,
    setTableUpdateRelId,
    setTableUpdateColId,
  } = useMutationUpdateRel();

  const { cardFixed, setCardFixed, setConfrimSort, menuName } =
    useContext(UserContext);

  const onDraggableCardItemFixed = () => {
    setCardFixed(!cardFixed);
    setConfrimSort("check data");
  };

  // const [columnDataUpdate] = useMutation(TABLE_COLUMN_DATA_UPDATE, {
  //   refetchQueries: [
  //     {
  //       query: TABLE_DATA_DETAIL,
  //       variables: { tableId: 534, tableColId: 8, tabRelId: "" },
  //     },
  //   ],
  // });

  // const onCardDataSetByMenu = () => {
  //   allCardData?.map((item, i) => {
  //     if (item.cardFlag === "false") {
  //       columnDataUpdate({
  //         variables: {
  //           id: parseInt(item.cardMenuDataId),
  //           columnData: menuName || "Home",
  //         },
  //       });
  //     }
  //   });
  // };

  return (
    <div className="max-w-screen-xl mx-auto mt-10 mb-1 px-8">
      <div class="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700 flex align-middle items-center">
        {/* <ul class="flex flex-wrap -mb-px">
          <li class="mr-2">
            <a
              href="#"
              class="inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500"
              aria-current="page"
            >
              Summary
            </a>
          </li>
          <li class="mr-2">
            <a
              href="#"
              class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
            >
              Positions
            </a>
          </li>

          <li class="mr-2">
            <a
              href="#"
              class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
            >
              Balances
            </a>
          </li>
          <li class="mr-2">
            <a
              href="#"
              class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
            >
              Activity & Orders
            </a>
          </li>
          <li class="mr-2">
            <a
              href="#"
              class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
            >
              Documents
            </a>
          </li>
          <li class="mr-2">
            <a
              href="#"
              class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
            >
              Planning
            </a>
          </li>
          <li class=""></li>
        </ul> */}
        <div className="items-end">
          {cardFixed === false ? <ListButton allCardData={allCardData} /> : ""}
        </div>
        <div className="items-end">
          <button
            class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-1.5 px-4 border border-gray-400 rounded shadow ml-3"
            onClick={() => {
              onDraggableCardItemFixed();
            }}
          >
            {cardFixed === false ? "Fixed" : "Edit"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AllNewsBar;
