import React from "react";

const Hashtag = ({ tag }) => {
  return (
    <div className="px-1">
      <div className="rounded-full px-4 py-2 text-xs bg-gray-900 text-white">
        {tag}
      </div>
    </div>
  );
};

export default Hashtag;
