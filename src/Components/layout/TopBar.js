import React from "react";

const TopBar = () => {
  return (
    <div class="max-w-screen-xl px-10 py-1 mx-auto">
      <div class="flex items-center">
        <ul class="flex flex-row font-medium mt-0 mr-6 space-x-8 text-sm">
          <li>
            <a
              href="#"
              class="text-gray-900 dark:text-white hover:underline"
              aria-current="page"
            >
              About Us
            </a>
          </li>
          <li>
            <a href="#" class="text-gray-900 dark:text-white hover:underline">
              Contact Us
            </a>
          </li>
          <li>
            <a href="#" class="text-gray-900 dark:text-white hover:underline">
              FAQs
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TopBar;
