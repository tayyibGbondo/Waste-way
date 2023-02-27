import React from "react";
import { Link } from "react-router-dom";

// Import from constant
import Images from "../../conatants/Images";

function Navbar() {
  return (
    <div>
      <nav class="bg-white border-gray-200 dark:bg-gray-900">
        <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-2.5">
          <a href="/" class="flex items-center">
            <img src={Images.Logo} class="h-6 mr-3 sm:h-9" alt="Waste way" />
            <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              Waste-Way
            </span>
          </a>
          <div class="flex items-center">
            <a
              href="tel:+232 77 430860"
              class="mr-6 hidden text-sm font-medium text-gray-500 dark:text-white hover:underline"
            >
              (232) 77 430860
            </a>
            <a
              href="#"
              class="text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline"
            >
              Login
            </a>
          </div>
        </div>
      </nav>
      <nav class="bg-gray-50 dark:bg-gray-700">
        <div class="max-w-screen-xl px-4 py-3 mx-auto md:px-6">
          <div class="flex items-center">
            <ul class="flex flex-row mt-0 mr-6 space-x-8 text-sm font-medium">
              <li>
                <Link
                  to="/"
                  class="text-gray-900 dark:text-white hover:underline"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  class="text-gray-900 dark:text-white hover:underline"
                >
                  About
                </Link>
              </li>
              <li>
                <a
                  href="/product"
                  class="text-gray-900 dark:text-white hover:underline"
                >
                  Products
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="text-gray-900 dark:text-white hover:underline"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
