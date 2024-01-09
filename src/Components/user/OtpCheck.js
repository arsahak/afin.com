import React from "react";

const OtpCheck = (props) => {
  const { confirmOtp, otpCheckValue, setOtpCheckValue } = props;
  return (
    <div>
      <div class="w-full md:mt-0 sm:max-w-md xl:p-0 ">
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Confirm your otp code
          </h1>
          <div class="space-y-4 md:space-y-6">
            <div>
              <label
                for="text"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Confirm Otp
              </label>
              <input
                type="text"
                name="otp"
                id="otp"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="otp..."
                required=""
                value={otpCheckValue}
                onChange={(e) => setOtpCheckValue(e.target.value)}
              />
            </div>
            <button
              type="submit"
              class="w-full text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 "
              onClick={confirmOtp}
            >
              Confirm OTP
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtpCheck;
