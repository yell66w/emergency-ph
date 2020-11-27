import React from "react";
import { MdPhoto, MdCreate } from "react-icons/md";

const Body = ({ currentUser }) => {
  return (
    <div className="w-3/5 bg-pink-800">
      <div className="flex flex-row bg-purple-400">
        <div className="flex w-1/12">
          <div className="flex justify-center items-center text-red-600 cursor-pointer focus:outline-none w-10 h-10 border border-red-600 bg-transparent rounded-full">
            <p className="text-lg">{currentUser.firstName[0]}</p>
          </div>
          {/* <img className="w-10 h-10 rounded-full" src="" alt="" /> */}
        </div>
        <div className="flex w-10/12">
          <input
            className="bg-gray-300 focus:outline-none w-full"
            type="text"
          />
        </div>
        <div className="flex w-1/12 items-center">
          <MdPhoto />
        </div>
      </div>
      <div> Categories</div>
      <div className="bg-yellow-500">
        <div className="">One post</div>
      </div>
    </div>
  );
};

export default Body;
