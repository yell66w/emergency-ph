import React from "react";

const SortTab = () => {
  return (
    <div className="flex flex-row bg-white shadow px-4 py-3 rounded-lg mt-4">
      <button className="w-20 flex bg-gray-800 text-white rounded-full px-2 text-sm font-medium items-center justify-center py-1">
        Latest
      </button>
      <button className="ml-2 w-20 flex text-gray-800 rounded-full px-2 text-sm font-medium items-center justify-center py-1">
        Popular
      </button>
      <button className="ml-2 w-20 flex text-gray-800 rounded-full px-2 text-sm font-medium items-center justify-center py-1">
        Updates
      </button>
    </div>
  );
};

export default SortTab;
