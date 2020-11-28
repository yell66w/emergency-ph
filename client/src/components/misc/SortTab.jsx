import React, { useEffect } from "react";

const SortTab = ({ sortedBy, setSortedBy }) => {
  return (
    <div className="flex flex-row bg-white shadow px-4 py-3 rounded-lg mt-4">
      <button
        onClick={() => setSortedBy("LATEST")}
        className={`${
          sortedBy == "LATEST"
            ? "bg-gray-800 text-white"
            : "bg-transparent text-gray-800"
        } transition duration-300 focus:bg-gray-800 focus:outline-none focus:text-white ml-2 w-20 flex hover:bg-gray-800 hover:text-white rounded-full px-2 text-sm font-medium items-center justify-center py-1`}
      >
        Latest
      </button>
      <button
        onClick={() => setSortedBy("POPULAR")}
        className={`${
          sortedBy == "POPULAR"
            ? "bg-gray-800 text-white"
            : "bg-transparent text-gray-800"
        } transition duration-300 focus:bg-gray-800 focus:outline-none focus:text-white ml-2 w-20 flex hover:bg-gray-800 hover:text-white rounded-full px-2 text-sm font-medium items-center justify-center py-1`}
      >
        Popular
      </button>
      <button
        onClick={() => setSortedBy("UPDATES")}
        className={`${
          sortedBy == "UPDATES"
            ? "bg-gray-800 text-white"
            : "bg-transparent text-gray-800"
        } transition duration-300 focus:bg-gray-800 focus:outline-none focus:text-white ml-2 w-20 flex hover:bg-gray-800 hover:text-white rounded-full px-2 text-sm font-medium items-center justify-center py-1`}
      >
        Updates
      </button>
    </div>
  );
};

export default SortTab;
