import React from "react";
import { MdCall } from "react-icons/md";

const VolunteerExtra = () => {
  return (
    <div className="flex flex-row mb-4">
      <div className="mr-2 flex justify-center items-center text-white cursor-pointer focus:outline-none w-10 h-10 bg-red-600 bg-transparent rounded-full">
        <p className="text-lg">J</p>
      </div>
      <div className="flex flex-col justify-center">
        <h1 className="font-medium">Juan Dela Cruz</h1>
        <p className="text-xs text-gray-300">Tacloban City</p>
      </div>
      <div className="ml-auto flex items-center ">
        <MdCall size={30} className="text-green-600" />
      </div>
    </div>
  );
};

export default VolunteerExtra;
