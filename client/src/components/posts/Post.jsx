import React, { useEffect, useState } from "react";
import HashtagPost from "../misc/HashtagPost";
import { AiFillNotification } from "react-icons/ai";
import { PostService } from "../../services/PostService";
import Spinner from "react-spinners/BounceLoader";

const Post = ({ post }) => {
  const {
    user_first_name,
    user_last_name,
    user_address,
    category,
    user_id,
    tags,
    photos,
    post_description,
    id,
  } = post;
  const [isLiked, setIsLiked] = useState(false);
  const [isUpvoteClicked, setIsUpvoteClicked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [upvotes, setUpvotes] = useState(post.upvotes);
  const _post = new PostService();

  useEffect(() => {
    setIsLoading(true);
    const getUserPostRelationship = async () => {
      try {
        const post = await _post.getUserPostRelationship(id);
        setIsLiked(post.liked);
        setIsLoading(false);
      } catch (error) {}
    };
    getUserPostRelationship();
  }, []);

  useEffect(() => {
    if (isUpvoteClicked) {
      if (isLiked) {
        setUpvotes(upvotes + 1);
      } else {
        setUpvotes(upvotes - 1);
      }
    }
  }, [isUpvoteClicked]);

  const onUpvote = async () => {
    try {
      setIsLiked(!isLiked);
      setIsUpvoteClicked(true);
      await _post.upvote(id);
    } catch (error) {}
  };
  return isLoading ? (
    <div className="bg-white items-center justify-center shadow rounded-lg flex flex-col mb-2 py-4 h-96">
      <Spinner color={"#E5E7EB"} />
    </div>
  ) : (
    <div className="bg-white shadow rounded-lg flex flex-col mb-2 py-4">
      <div className="flex items-center px-4">
        <div className="mr-2 flex justify-center items-center text-white cursor-pointer focus:outline-none w-12 h-12 bg-red-600 bg-transparent rounded-full">
          <p className="text-lg">Y</p>
        </div>
        <div className="flex flex-col">
          <div className="flex">
            <h1 className="font-semibold ">
              {`${user_first_name} ${user_last_name}`}
            </h1>
          </div>

          <p className="text-xs text-gray-400">{user_address}</p>
        </div>
        <div className="ml-auto rounded-full w-auto px-4 py-2 text-xs flex items-center justify-center font-medium bg-red-600 text-white">
          {category}
        </div>
      </div>
      <div className="mt-3 px-4">
        <p>{post_description}</p>
      </div>
      <div className="mt-3 flex flex-row px-4">
        {tags.map((tag) => {
          return <HashtagPost key={`${user_id}${tag}`} name={tag} />;
        })}
      </div>
      <div className="mt-3">
        <img
          src={process.env.PUBLIC_URL + `/uploads/${photos[0]}`}
          className="object-cover h-96 w-full "
          alt=""
        />
      </div>
      <div className="mt-3 flex  items-center px-4">
        <AiFillNotification
          onClick={onUpvote}
          className={`${
            isLiked ? "text-red-600" : "text-gray-400"
          } cursor-pointer transition duration-300 hover:text-red-600 mr-2`}
          size={30}
        />
        <p className="text-gray-700">{upvotes}</p>
      </div>
    </div>
  );
};

export default Post;
