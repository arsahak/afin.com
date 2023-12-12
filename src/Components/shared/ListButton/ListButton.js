import { Fragment, useState, useContext } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

// import { gql, useQuery, useMutation } from "@apollo/client";
// import { TABLE_DATA_DETAIL } from "../../../GraphQL/Queries";
// import { TABLE_COLUMN_DATA_UPDATE } from "../../../GraphQL/Mutations";

import { UserContext } from "../../../UseContext/UserContext";
import useMutationUpdateRel from "../../../GraphQLApiCall/useMutationUpdateRel";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ListButton({ allCardData }) {
  const {
    setUpdateId,
    setUpdateData,
    setTableUpdateId,
    setTableUpdateRelId,
    setTableUpdateColId,
  } = useMutationUpdateRel();

  const { menuName, setMenuName } = useContext(UserContext);

  const onCardDataShow = (id) => {
    allCardData?.map((item, i) => {
      if (item.id === id) {
        // columnDataUpdate({
        //   variables: {
        //     id: parseInt(item.cardMenuDataId),
        //     columnData: menuName,
        //   },
        // });
        // columnDataUpdate({
        //   variables: {
        //     id: parseInt(item.cardFlagId),
        //     columnData: true,
        //   },
        // });
        setUpdateId(parseInt(item.cardMenuDataId));
        setUpdateData(menuName);
        setTableUpdateId(534);
        setTableUpdateRelId("");
        setTableUpdateColId(0);

        setTimeout(() => {
          setUpdateId(parseInt(item.cardFlagId));
          setUpdateData(true);
          setTableUpdateId(534);
          setTableUpdateRelId("");
          setTableUpdateColId(0);
        }, 1000);
      }
    });
  };

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
          Add Card
          <ChevronDownIcon
            className="-mr-1 h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {allCardData?.map((item, i) => {
              if (item.cardFlag === "false") {
                return (
                  <Menu.Item key={i} id={item.id}>
                    {({ active }) => (
                      <div>
                        <input
                          type="checkbox"
                          class="appearance-none checked:bg-blue-600 checked:border-transparent ..."
                        />
                        <a
                          onClick={() => {
                            // addItem({
                            //   id: item.id,
                            //   cardBottom: item.cardBottom,
                            //   cardItem: item.cardItem,
                            //   cardName: item.cardName,
                            //   cardSize: item.cardSize,
                            //   cardTop: item.cardTop,
                            // });
                            onCardDataShow(item.id);
                          }}
                          href="#"
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                          {item.cardName}
                        </a>
                      </div>
                    )}
                  </Menu.Item>
                );
              }
            })}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

// export default ListButton;
