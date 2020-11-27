import React from "react";
import Spinner from "react-spinners/RingLoader";

const Loading = ({ desc }) => {
  return (
    <div className="flex  flex-col items-center text-white justify-center min-h-screen bg-gradient-to-br from-blue-500 to-purple-600">
      <Spinner color={"#fff"} size={150} />
      <p className="mt-2">{desc}</p>
    </div>
  );
};

export default Loading;
