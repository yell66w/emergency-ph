import React from "react";
import Hashtag from "../misc/Hashtag";
import bagyo from "../../assets/img/bagyo.jpg";
import { MdThumbUp } from "react-icons/md";
import { AiFillNotification, AiOutlineNotification } from "react-icons/ai";
import { PostService } from "../../services/PostService";

const Post = ({ post }) => {
  const {
    user_id,
    user_first_name,
    user_last_name,
    user_name,
    category,
    post_description,
    tags,
    photos,
    status,
    upvotes,
    _id,
  } = post;

  const _post = new PostService();

  const onUpvote = async () => {
    try {
      _post.upvote(_id);
    } catch (error) {}
  };
  return (
    <div className="bg-white shadow rounded-lg flex flex-col mb-2 p-4">
      <div className="flex items-center ">
        <div className="mr-2 flex justify-center items-center text-white cursor-pointer focus:outline-none w-12 h-12 bg-red-600 bg-transparent rounded-full">
          <p className="text-lg">Y</p>
        </div>
        <div className="flex flex-col">
          <div className="flex">
            <h1 className="font-semibold ">
              {`${user_first_name} ${user_last_name}`}
            </h1>
          </div>

          <p className="text-xs text-gray-400">
            Barangay 80, Bagumbayan, Tacloban City, Leyte
          </p>
        </div>
        <div className="ml-auto rounded-full w-auto px-4 py-2 text-xs flex items-center justify-center font-medium bg-red-600 text-white">
          {category}
        </div>
      </div>
      <div className="mt-3">
        <p>{post_description}</p>
      </div>
      <div className="mt-3 flex flex-row">
        {tags.map((tag) => {
          return <Hashtag key={`${user_id}${tag}`} name={tag} />;
        })}
      </div>
      <div className="mt-3">
        <img
          src={bagyo}
          className="object-cover h-1/2 w-full rounded-lg"
          alt=""
        />
      </div>
      <div className="mt-3 flex  items-center">
        <AiFillNotification
          onClick={onUpvote}
          className="text-gray-400 cursor-pointer transition duration-300 hover:text-red-600 mr-2"
          size={30}
        />
        <p className="text-gray-700">{upvotes}</p>
      </div>
    </div>
  );
};

export default Post;
