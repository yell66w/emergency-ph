import React from "react";
import { Link } from "react-router-dom";
const Hashtag = ({ tag, name, id }) => {
  return (
    <div className="p-1 my-1">
      <Link
        to={`/t/${name.replace(/^#+/i, "")}`}
        // to={`/t/${id}`}
        className="cursor-pointer rounded-full px-4 py-2 text-xs bg-gray-900 text-white"
      >
        {name}
      </Link>
    </div>
  );
};

export default Hashtag;
