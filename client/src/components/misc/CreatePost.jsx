import React from "react";

const CreatePost = ({ currentUser, setShowModal }) => {
  return (
    <div className="flex flex-row bg-white shadow px-4 py-4 rounded-lg">
      <div className="flex mr-2">
        <div className="flex justify-center items-center text-white cursor-pointer focus:outline-none w-12 h-12 bg-red-600 bg-transparent rounded-full">
          <p className="text-lg">{currentUser.firstName[0]}</p>
        </div>
        {/* <img className="w-10 h-10 rounded-full" src="" alt="" /> */}
      </div>
      <div className="flex w-full">
        <button
          onClick={() => setShowModal(true)}
          className="transition duration-300 ease-in-out bg-gray-100 hover:bg-gray-200 focus:outline-none w-full rounded-full px-4 py-2 cursor-pointer flex items-center justify-start"
        >
          <p className="text-gray-500">
            What's wrong, {currentUser.firstName}?
          </p>
        </button>
      </div>
    </div>
  );
};

export default CreatePost;
