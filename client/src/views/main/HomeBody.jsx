import React from "react";
import Post from "../../components/posts/Post";

const Body = ({ currentUser }) => {
  return (
    <div className="w-3/5  px-4 pt-2">
      <div className="flex flex-row bg-white shadow px-4 py-4 rounded-lg">
        <div className="flex mr-2">
          <div className="flex justify-center items-center text-white cursor-pointer focus:outline-none w-12 h-12 bg-red-600 bg-transparent rounded-full">
            <p className="text-lg">{currentUser.firstName[0]}</p>
          </div>
          {/* <img className="w-10 h-10 rounded-full" src="" alt="" /> */}
        </div>
        <div className="flex w-full">
          <button className="bg-gray-100 focus:outline-none w-full rounded-full px-4 py-2 cursor-pointer flex items-center justify-start">
            <p className="text-gray-500">
              What's on your mind, {currentUser.firstName}
            </p>
          </button>
        </div>
      </div>

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

      <div className="bg-transparent rounded-lg mt-4 flex flex-col">
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
};

export default Body;
