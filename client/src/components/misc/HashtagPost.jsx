import React from "react";
import { Link } from "react-router-dom";
const HashtagPost = ({ tag, name, id }) => {
  return (
    <div className="p-1 my-1">
      <Link
        to={`/t/${name.replace(/^#+/i, "")}`}
        // to={`/t/${id}`}
        className="cursor-pointer rounded-full  text-sm font-bold  text-gray-800"
      >
        {name}
      </Link>
    </div>
  );
};

export default HashtagPost;
