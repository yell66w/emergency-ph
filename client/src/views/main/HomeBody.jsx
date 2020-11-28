import React, { useEffect, useState } from "react";
import Post from "../../components/posts/Post";
import Spinner from "react-spinners/MoonLoader";
import { PostService } from "../../services/PostService";
import CreatePost from "../../components/misc/CreatePost";
import SortTab from "../../components/misc/SortTab";
import CreatePostModal from "../../components/misc/CreatePostModal";

const Body = ({ currentUser }) => {
  const _post = new PostService();
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [postUpdated, setPostUpdated] = useState(true);
  const [sortedBy, setSortedBy] = useState("LATEST");

  useEffect(() => {
    const getAllPosts = async () => {
      setIsLoading(true);
      let posts = [];
      try {
        posts = await _post.getAllPosts();
      } catch (error) {
        console.log(error);
      }
      // if (sortedBy === "POPULAR") posts = await _post.getAllPopularPosts();
      // else posts = await _post.getAllPosts();
      setPosts(posts);
      setIsLoading(false);
      setPostUpdated(false);
    };
    if (postUpdated || sortedBy) {
      getAllPosts();
    }
  }, [postUpdated, sortedBy]);

  return (
    <>
      <div className="w-9/12 px-4 pt-2">
        <CreatePost currentUser={currentUser} setShowModal={setShowModal} />
        <SortTab sortedBy={sortedBy} setSortedBy={setSortedBy} />

        <div className="bg-transparent rounded-lg mt-4 flex flex-col">
          {isLoading ? (
            <div className="flex items-center justify-center h-full min-h-screen ">
              <Spinner />
            </div>
          ) : (
            posts.map((post) => {
              return (
                <Post
                  postUpdated={postUpdated}
                  setPostUpdated={setPostUpdated}
                  key={post.id}
                  post={post}
                />
              );
            })
          )}
        </div>
      </div>
      <CreatePostModal
        showModal={showModal}
        setShowModal={setShowModal}
        setPostUpdated={setPostUpdated}
      />
    </>
  );
};

export default Body;
