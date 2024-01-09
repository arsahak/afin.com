import React from "react";

const SingIn = (props) => {
  const {
    singIn,
    setSignIn,
    signInPage,
    setSignInPage,
    signInValue,
    setSignInValue,
    onSignInFormValue,
    handleSubmit,
    userAdminSingup,
    successFulSignUpEmail,
    userEmail,
  } = props;

  return (
    <div>
      <div class="w-full md:mt-0 sm:max-w-md xl:p-0 z-auto">
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
          {successFulSignUpEmail === userEmail ? (
            <h1 class="text-center text-lg font-normal leading-tight tracking-tight text-yellow-500 md:text-lg dark:text-white">
              Check out your email for verify your account!
            </h1>
          ) : (
            ""
          )}
          <h1 class="text-center text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Sign in to your account
          </h1>
          <form
            class="space-y-4 md:space-y-6"
            action="#"
            onSubmit={handleSubmit}
          >
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
                value={signInValue.email}
                onChange={onSignInFormValue}
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
                value={signInValue.password}
                onChange={onSignInFormValue}
              />
            </div>
            <div class="flex items-center justify-between">
              <div class="flex items-start">
                <div class="flex items-center h-5">
                  <input
                    id="remember"
                    aria-describedby="remember"
                    type="checkbox"
                    class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-green-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-green-600 dark:ring-offset-gray-800 selection:text-green-500"
                    required=""
                  />
                </div>
                <div class="ml-3 text-sm">
                  <label
                    for="remember"
                    class="text-gray-500 dark:text-gray-300"
                  >
                    Remember me
                  </label>
                </div>
              </div>
              <a
                href="#"
                class="text-sm font-medium text-green-600 hover:underline dark:text-green-500"
              >
                Forgot password?
              </a>
            </div>
            <button
              type="submit"
              class="w-full text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 "
              onClick={handleSubmit}
            >
              Sign in
            </button>
            <p class="text-sm font-light text-gray-500 dark:text-gray-400">
              Don’t have an account yet?{" "}
              <a
                onClick={userAdminSingup}
                class="font-medium text-green-600 hover:underline dark:text-green-500 cursor-pointer"
              >
                Sign up
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SingIn;
