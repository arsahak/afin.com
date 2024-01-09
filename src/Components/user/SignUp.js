import React from "react";

const SingUp = (props) => {
  const {
    setSignInPage,
    setSignUpPage,
    signUpValue,
    userAdminSingUpSubmit,
    onSignUpFormValue,
  } = props;

  return (
    <div>
      <div class="w-full md:mt-0 sm:max-w-md xl:p-0 ">
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 class="text-center text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Sign up to your account
          </h1>
          <form
            class="space-y-4 md:space-y-6"
            // action="#"
            // onSubmit={handleSubmit}
          >
            <div className="flex items-center gap-2">
              <div>
                <label
                  for="email"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="first name"
                  required=""
                  value={signUpValue.firstName}
                  onChange={onSignUpFormValue}
                />
              </div>
              <div>
                <label
                  for="email"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="last name"
                  required=""
                  value={signUpValue.lastName}
                  onChange={onSignUpFormValue}
                />
              </div>
            </div>
            <div>
              <label
                for="email"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="name@company.com"
                required=""
                value={signUpValue.email}
                onChange={onSignUpFormValue}
              />
            </div>
            <div>
              <label
                for="password"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required=""
                value={signUpValue.password}
                onChange={onSignUpFormValue}
              />
            </div>

            <button
              type="submit"
              class="w-full text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 "
              onClick={userAdminSingUpSubmit}
            >
              Sign up
            </button>
            <p class="text-sm font-light text-gray-500 dark:text-gray-400">
              I already have an account.{" "}
              <a
                onClick={(e) => {
                  setSignInPage(true);
                  setSignUpPage(false);
                }}
                class="font-medium text-green-600 hover:underline dark:text-green-500 cursor-pointer"
              >
                Sign in
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SingUp;
