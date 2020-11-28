import React, { useEffect } from "react";

const SortTab = ({ sortedBy, setSortedBy }) => {
  return (
    <div className="flex flex-row bg-white shadow px-4 py-4 rounded-lg mt-4">
      <button
        onClick={() => setSortedBy("LATEST")}
        className={`${
          sortedBy == "LATEST" ? "font-bold " : "bg-transparent text-gray-800"
        } transition duration-300  focus:outline-none  ml-2 w-20 flex    px-2 text-sm font-medium items-center justify-center py-1`}
      >
        Latest
      </button>
      <button
        onClick={() => setSortedBy("POPULAR")}
        className={`${
          sortedBy == "POPULAR" ? "font-bold " : "bg-transparent text-gray-800"
        } transition duration-300  focus:outline-none  ml-2 w-20 flex    px-2 text-sm font-medium items-center justify-center py-1`}
      >
        Popular
      </button>
      <button
        onClick={() => setSortedBy("UPDATES")}
        className={`${
          sortedBy == "UPDATES" ? "font-bold " : "bg-transparent text-gray-800"
        } transition duration-300  focus:outline-none  ml-2 w-20 flex    px-2 text-sm font-medium items-center justify-center py-1`}
      >
        Updates
      </button>
    </div>
  );
};

export default SortTab;
