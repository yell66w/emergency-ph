import React from "react";
import { Link } from "react-router-dom";
import {
  RiThunderstormsFill,
  RiHome3Fill,
  RiEarthquakeFill,
  RiPoliceCarFill,
} from "react-icons/ri";
import { AiFillFire } from "react-icons/ai";
import { BsPeopleFill } from "react-icons/bs";

const Sidebar = () => {
  return (
    <div className="w-1/5    text-gray-800">
      <ul className=" pl-10 py-4 text-lg flex flex-col">
        <Link
          to="/"
          className="font-bold  mb-1 flex items-center py-4 px-4 rounded-lg hover:bg-gray-200"
        >
          <RiHome3Fill size={30} className="mr-3" />
          Home
        </Link>
        <Link
          to="/typhoon"
          className="font-bold  mb-1 flex items-center  py-4 px-4 rounded-lg hover:bg-gray-200"
        >
          <RiThunderstormsFill size={30} className="mr-3" />
          Typhoon
        </Link>
        <Link
          to="/fire"
          className="font-bold  mb-1 flex items-center py-4 px-4 rounded-lg hover:bg-gray-200"
        >
          <AiFillFire size={30} className="mr-3" />
          Fire
        </Link>
        <Link
          to="/earthquake"
          className="font-bold  mb-1 flex items-center py-4 px-4 rounded-lg hover:bg-gray-200"
        >
          <RiEarthquakeFill size={30} className="mr-3" />
          Earthquake
        </Link>
        <Link
          to="/crimes"
          className="font-bold  mb-1 flex items-center py-4 px-4 rounded-lg hover:bg-gray-200"
        >
          <RiPoliceCarFill size={30} className="mr-3" />
          Crimes
        </Link>
        {/* <Link
          to="/volunteer"
          className="font-bold  mb-1 flex items-center py-4 px-4 rounded-lg hover:bg-gray-200"
        >
          <BsPeopleFill size={30} className="mr-3" />
          Volunteers
        </Link> */}
      </ul>
    </div>
  );
};

export default Sidebar;
