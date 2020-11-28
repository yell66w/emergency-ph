import React, { useEffect, useState } from "react";
import Post from "../../components/posts/Post";
import Spinner from "react-spinners/MoonLoader";
import CreatePost from "../../components/misc/CreatePost";
import CreatePostModal from "../../components/misc/CreatePostModal";
import { useParams } from "react-router-dom";
import { TagService } from "../../services/TagService";

const TagsBody = ({ currentUser }) => {
  let { tag } = useParams();

  const _tags = new TagService();
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [postUpdated, setPostUpdated] = useState(true);

  useEffect(() => {
    const getAllPosts = async () => {
      setIsLoading(true);
      const posts = await _tags.getAllPostsByTagByName(tag);
      if (posts.length > 0) {
        setPosts(posts);
      }
      setIsLoading(false);
      setPostUpdated(false);
    };
    if (postUpdated || tag) {
      getAllPosts();
    }
  }, [postUpdated, tag]);

  return (
    <>
      <div className="w-9/12 px-4 pt-2">
        <CreatePost currentUser={currentUser} setShowModal={setShowModal} />
        {/* <SortTab /> */}

        <div className="bg-transparent rounded-lg mt-4 flex flex-col">
          {isLoading ? (
            <div className="flex items-center justify-center h-full min-h-screen ">
              <Spinner />
            </div>
          ) : posts != undefined || posts != null ? (
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
          ) : null}
        </div>
      </div>
      {/* Modal */}
      <CreatePostModal
        showModal={showModal}
        setShowModal={setShowModal}
        setPostUpdated={setPostUpdated}
      />
    </>
  );
};

export default TagsBody;
