import React from "react";

const SortTab = () => {
  return (
    <div className="flex flex-row bg-white shadow px-4 py-3 rounded-lg mt-4">
      <button className="transition duration-300 focus:bg-gray-800 focus:outline-none focus:text-white ml-2 w-20 flex hover:bg-gray-800 hover:text-white text-gray-800 rounded-full px-2 text-sm font-medium items-center justify-center py-1">
        Latest
      </button>
      <button className="transition duration-300 focus:bg-gray-800 focus:outline-none focus:text-white ml-2 w-20 flex hover:bg-gray-800 hover:text-white text-gray-800 rounded-full px-2 text-sm font-medium items-center justify-center py-1">
        Popular
      </button>
      <button className="transition duration-300 focus:bg-gray-800 focus:outline-none focus:text-white ml-2 w-20 flex hover:bg-gray-800 hover:text-white text-gray-800 rounded-full px-2 text-sm font-medium items-center justify-center py-1">
        Updates
      </button>
    </div>
  );
};

export default SortTab;
