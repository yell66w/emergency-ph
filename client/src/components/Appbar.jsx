import React from "react";
import { Link } from "react-router-dom";

const Appbar = ({ onSignOut }) => {
  return (
    <div className="bg-blue-500 h-16 flex tracking-wider items-center px-6 text-white ">
      <h1 className="font-bold  text-lg">Chihuahua</h1>
      <ul className="flex ml-auto text-sm font-medium">
        <li className="px-2">
          <Link to="/">Home</Link>
        </li>
        <li className="px-2">
          <Link to="/about">About</Link>
        </li>
        <li className="px-2">
          <button className="focus:outline-none" onClick={onSignOut}>
            Logout
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Appbar;
