import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between font-bold shadow-xl bg-white h-[80px] items-center overflow-hidden">
      <div>
        <h1 className=" font-serif text-lg">PICKSY.</h1>
      </div>
      <div>
        <form>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
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
            </div>
            <input
              type="search"
              id="default-search"
              className="block  p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="what are you looking for"
              required
            />
          </div>
        </form>
      </div>
      <div className=" gap-3">
        <i className=" gap-4 fa-solid fa-cart-shopping"></i>
        <i className="fa-solid fa-cart-shopping"></i>
      </div>
    </div>
  );
};

export default Navbar;
