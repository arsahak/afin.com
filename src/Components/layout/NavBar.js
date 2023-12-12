import { Fragment, useRef, useState, useEffect, useContext } from "react";
import { Dialog } from "@headlessui/react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { UserContext } from "../../UseContext/UserContext";
import { gql, useQuery, useMutation } from "@apollo/client";

import { TABLE_DATA_DETAIL } from "../../GraphQL/Queries";

import { CREATE_CRUD_INFO_MUTATION } from "../../GraphQL/Mutations";
import { menu } from "@material-tailwind/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function NavBar({
  subFlowDataSource,
  subFlowAction,
  cardDataDic,
  menuList,
}) {
  const { menuName, setMenuName, navClick, setNavClick } =
    useContext(UserContext);
  const [uniqueId, setUniqueId] = useState(Math.floor(Date.now() / 1000));
  const [singIn, setSignIn] = useState(false);
  const [signInPage, setSignInPage] = useState(false);
  const [signUpPage, setSignUpPage] = useState(false);
  const [open, setOpen] = useState(false);
  const cancelButtonRef = useRef(null);

  const [createCrudInfo] = useMutation(CREATE_CRUD_INFO_MUTATION, {
    refetchQueries: [
      {
        query: TABLE_DATA_DETAIL,
        variables: { tableId: 544, tableColId: 1, tabRelId: "" },
      },
    ],
  });

  const checkMenuName = (value) => {
    setMenuName(value);
  };

  const onMutationDataClick = () => {
    // eval(table_data?.getAllTableColumn?.jsonData)?.map((item, i) => {
    //   if (item.table === subFlowDataSource) {
    //     console.log("check data for me 86", item.table === subFlowDataSource);
    //     item.column?.map((col, j) => {
    //       createCrudInfo({
    //         variables: {
    //           tableId: item.id,
    //           tableColId: col.no,
    //           tabRelId: "",
    //           tableRefId: uniqueId,
    //           columnData: "check my value",
    //           columnName: col.name,
    //           userId: "",
    //         },
    //       });
    //     });
    //   }
    // });
  };

  return (
    <>
      <Disclosure as="nav" className="bg-gray-800">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-screen-xl px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex flex-shrink-0 items-center text-white text-2xl">
                    AIFIN
                  </div>
                  <div className="hidden sm:ml-6 sm:block">
                    <div className="flex space-x-4">
                      {menuList?.map((item) => (
                        <div
                          key={item.name}
                          href="#"
                          // onClick={(e) =>
                          //   localStorage.setItem("menuName", item.name)
                          // }

                          className={classNames(
                            item.current
                              ? "bg-gray-900 text-white"
                              : "text-gray-300 hover:bg-gray-700 hover:text-white",
                            "rounded-md px-3 py-2 text-sm font-medium cursor-pointer"
                          )}
                          aria-current={item.current ? "page" : undefined}
                          onClick={() => checkMenuName(item.name)}
                        >
                          <div
                            className={`${
                              menuName === item.name ? "text-blue-700" : ""
                            }`}
                          >
                            {" "}
                            {item.name}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <form className="">
                  <div class="flex w-[500px] ">
                    <label
                      for="search-dropdown"
                      class="mb-2 text-sm font-sm text-gray-900 sr-only dark:text-white"
                    >
                      Your Email
                    </label>
                    <button
                      id="dropdown-button"
                      data-dropdown-toggle="dropdown"
                      class="flex-shrink-0 z-10 inline-flex items-center py-1.5 px-4 text-xs font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-l-lg hover:bg-gray-200 focus:ring-1 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600"
                      type="button"
                    >
                      All categories{" "}
                      <svg
                        class="w-2.5 h-2.5 ml-2.5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 10 6"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="m1 1 4 4 4-4"
                        />
                      </svg>
                    </button>
                    <div
                      id="dropdown"
                      class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                    >
                      <ul
                        class="py-2 text-sm text-gray-700 dark:text-gray-200"
                        aria-labelledby="dropdown-button"
                      >
                        <li>
                          <button
                            type="button"
                            class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Mockups
                          </button>
                        </li>
                        <li>
                          <button
                            type="button"
                            class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Templates
                          </button>
                        </li>
                        <li>
                          <button
                            type="button"
                            class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Design
                          </button>
                        </li>
                        <li>
                          <button
                            type="button"
                            class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Logos
                          </button>
                        </li>
                      </ul>
                    </div>
                    <div class="relative w-full">
                      <input
                        type="search"
                        id="search-dropdown"
                        class="block p-1.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 focus:ring-white-500 focus:border-white-500 dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-white-500 placeholder:text-xs"
                        placeholder="Search Mockups, Logos, Design Templates..."
                        required
                      />
                      <button
                        type="submit"
                        class="absolute top-0 right-0 p-1.5 text-sm font-medium h-full text-white bg-white rounded-r-lg border border-white-700 hover:bg-white-800 focus:ring-4 focus:outline-none focus:ring-white-300 dark:bg-white-600 dark:hover:bg-white-700 dark:focus:ring-white-800"
                      >
                        <svg
                          class="w-3 h-3 text-indigo-950"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 20 20"
                        >
                          <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                          />
                        </svg>
                        <span class="sr-only">Search</span>
                      </button>
                    </div>
                  </div>
                </form>

                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  <button
                    type="button"
                    className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  >
                    <span className="absolute -inset-1.5" />
                    <span className="sr-only">View notifications</span>
                    <BellIcon className="h-6 w-6" aria-hidden="true" />
                  </button>

                  {/* Profile dropdown */}
                  <Menu as="div" className="relative ml-3">
                    <div>
                      {singIn === true ? (
                        <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                          <span className="absolute -inset-1.5" />
                          <span className="sr-only">Open user menu</span>
                          <img
                            className="h-8 w-8 rounded-full"
                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt=""
                          />
                        </Menu.Button>
                      ) : (
                        <button
                          class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-1 px-4 border  border-gray-400 rounded-full shadow"
                          onClick={() => {
                            setSignInPage(true);
                          }}
                        >
                          Sign In
                        </button>
                      )}
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
                      <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              Your Profile
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              Settings
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              Sign out
                            </a>
                          )}
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="space-y-1 px-2 pb-3 pt-2">
                {menuList?.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    onClick={() => setMenuName(item.name)}
                    className={classNames(
                      item.current
                        ? "bg-gray-900 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white",
                      "block rounded-md px-3 py-2 text-base font-medium"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      <Transition.Root show={signInPage} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          initialFocus={cancelButtonRef}
          onClose={setOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                  <div className="px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                    <button
                      type="button"
                      className="mt-3 inline-flex w-full justify-center rounded-full px-1 py-1 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto hover:text-red-700"
                      onClick={() => {
                        setSignInPage(false);
                        setSignUpPage(false);
                      }}
                      ref={cancelButtonRef}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                  <div className="bg-white px-4 pb-0 mb-10 pt-0 sm:p-6 sm:pb-4">
                    {signUpPage === false ? (
                      eval(cardDataDic)?.map((item, i) => {
                        return (
                          <>
                            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-2 lg:px-8">
                              <div className="mt-0 sm:mx-auto sm:w-full sm:max-w-sm">
                                <form
                                  className="space-y-6"
                                  // action="#"
                                  // method="POST"
                                >
                                  {item.item === "input" ? (
                                    <div>
                                      <label
                                        htmlFor="email"
                                        className="block text-sm font-medium leading-6 text-gray-900"
                                      >
                                        {item.label}
                                      </label>
                                      <div className="mt-0">
                                        <input
                                          id="email"
                                          name="email"
                                          type="email"
                                          autoComplete="email"
                                          required
                                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                      </div>
                                    </div>
                                  ) : item.item === "password" ? (
                                    <div>
                                      <div className="flex items-center justify-between">
                                        <label
                                          htmlFor="password"
                                          className="block text-sm font-medium leading-6 text-gray-900"
                                        >
                                          Password
                                        </label>
                                        <div className="text-sm">
                                          <a
                                            href="#"
                                            className="font-semibold text-indigo-600 hover:text-indigo-500"
                                          >
                                            Forgot password?
                                          </a>
                                        </div>
                                      </div>
                                      <div className="mt-0">
                                        <input
                                          id="password"
                                          name="password"
                                          type="password"
                                          autoComplete="current-password"
                                          required
                                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                      </div>
                                    </div>
                                  ) : item.item === "button" ? (
                                    <div>
                                      <button
                                        type="submit"
                                        className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                        onClick={() => {
                                          setSignInPage(false);
                                          onMutationDataClick();
                                        }}
                                      >
                                        Sign in
                                      </button>
                                    </div>
                                  ) : (
                                    ""
                                  )}
                                </form>

                                {/* <p className="mt-10 text-center text-sm text-gray-500">
                                  Not a member?{" "}
                                  <a
                                    href="#"
                                    className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
                                    onClick={() => setSignUpPage(true)}
                                  >
                                    Sign Up Please
                                  </a>
                                </p> */}
                              </div>
                            </div>
                          </>
                        );
                      })
                    ) : (
                      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-2 lg:px-8">
                        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                          <h2 className="mt-0 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                            Sign up your account
                          </h2>
                        </div>

                        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                          <form className="space-y-6" action="#" method="POST">
                            <div className="flex gap-10">
                              <div>
                                <label
                                  htmlFor="firstname"
                                  className="block text-sm font-medium leading-6 text-gray-900"
                                >
                                  First Name
                                </label>
                                <div className="mt-2">
                                  <input
                                    id="firstname"
                                    name="firstname"
                                    type="text"
                                    autoComplete="first name"
                                    required
                                    className="flex w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                  />
                                </div>
                              </div>
                              <div>
                                <label
                                  htmlFor="lastname"
                                  className="flex text-sm font-medium leading-6 text-gray-900"
                                >
                                  Last Name
                                </label>
                                <div className="mt-2">
                                  <input
                                    id="lastname"
                                    name="lastname"
                                    type="text"
                                    autoComplete="last name"
                                    required
                                    className=" w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                  />
                                </div>
                              </div>
                            </div>

                            <div>
                              <label
                                htmlFor="email"
                                className="block text-sm font-medium leading-6 text-gray-900"
                              >
                                Email address
                              </label>
                              <div className="mt-2">
                                <input
                                  id="email"
                                  name="email"
                                  type="email"
                                  autoComplete="email"
                                  required
                                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                              </div>
                            </div>

                            <div>
                              <div className="flex items-center justify-between">
                                <label
                                  htmlFor="password1"
                                  className="block text-sm font-medium leading-6 text-gray-900"
                                >
                                  Password
                                </label>
                              </div>
                              <div className="mt-2">
                                <input
                                  id="password1"
                                  name="password1"
                                  type="password"
                                  autoComplete="current-password"
                                  required
                                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                              </div>
                            </div>

                            <div>
                              <div className="flex items-center justify-between">
                                <label
                                  htmlFor="password2"
                                  className="block text-sm font-medium leading-6 text-gray-900"
                                >
                                  Confirm Password
                                </label>
                              </div>
                              <div className="mt-2">
                                <input
                                  id="password2"
                                  name="password2"
                                  type="password"
                                  autoComplete="current-password"
                                  required
                                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                              </div>
                            </div>

                            <div>
                              <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                onClick={() => setSignInPage(false)}
                              >
                                Sign up
                              </button>
                            </div>
                          </form>

                          <p className="mt-10 text-center text-sm text-gray-500">
                            <a
                              href="#"
                              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
                              onClick={() => setSignUpPage(false)}
                            >
                              Sign in to your account
                            </a>
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
}
