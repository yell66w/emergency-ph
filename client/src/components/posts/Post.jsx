import React from "react";
import Hashtag from "../misc/Hashtag";
import bagyo from "../../assets/img/bagyo.jpg";
import { MdThumbUp } from "react-icons/md";

const Post = () => {
  return (
    <div className="bg-white shadow rounded-lg flex flex-col mb-2 p-4">
      <div className="flex items-center ">
        <div className="mr-2 flex justify-center items-center text-white cursor-pointer focus:outline-none w-12 h-12 bg-red-600 bg-transparent rounded-full">
          <p className="text-lg">Y</p>
        </div>
        <div className="flex flex-col">
          <h1 className="font-semibold">Akosi Chihuahua Dogie</h1>
          <p className="text-xs text-gray-400">
            Barangay 80, Bagumbayan, Tacloban City, Leyte
          </p>
        </div>
      </div>
      <div className="mt-3">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, quam
          nesciunt. Nobis a inventore earum cum deleniti! Similique iste cumque
          optio necessitatibus molestiae reiciendis id aliquid non ut dolore
          tempora facere, tempore quasi perspiciatis nulla aut pariatur
          exercitationem! Quis nihil minima consequatur, explicabo vero qui
          deserunt voluptate in obcaecati veniam?
        </p>
      </div>
      <div className="mt-3 flex flex-row">
        <Hashtag />
        <Hashtag />
        <Hashtag />
        <Hashtag />
        <Hashtag />
        <Hashtag />
      </div>
      <div className="mt-3">
        <img
          src={bagyo}
          className="object-cover h-1/2 w-full rounded-lg"
          alt=""
        />
      </div>
      <div className="mt-3 flex  items-center">
        <MdThumbUp className="text-red-600 mr-2" size={20} />
        <p className="text-gray-700">92</p>
      </div>
    </div>
  );
};

export default Post;
