//DITO NIYO ILALAGAY YUNG PINAKA LOGIC TALAGA WALANG ROUTING MGA FUNCTION LANG

const config = require("config.json");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const db = require("_helpers/db");
const User = db.User;
const Post = db.Post;
const Tag = db.Tag;

module.exports = {
  getAllPost,
  getPostById,
  getAllPostsByPopularity,
  createPost,
  updatePost,
  deletePost,
  getAllTyphoonPosts,
  deleteAllPosts,
};

async function getAllPost() {
  return await Post.find();
}
async function getAllTyphoonPosts() {
  return await Post.find({ category: "TYPHOON" });
  // return await { message: "working" };
}

async function getPostById(id) {
  return await Post.findById(id);
}

async function getAllPostsByPopularity(upvotes) {
  return await Post.find({ upvotes: 0 });
}

async function createPost(userParam, userid) {
  const userData = await User.findById(userid);
  //   console.log(userData);
  const post = new Post({
    user_id: userData._id,
    user_name: userData.username,
    user_first_name: userData.firstName,
    user_last_name: userData.lastName,
    upvotes: 0,
    status: userParam.status,
    post_title: userParam.title,
    post_description: userParam.description,
    photos: userParam.photos,
    tags: userParam.tags,
    category: userParam.category,
  });

  await userParam.tags.forEach(async (tag) => {
    const gettingTag = await Tag.findOne({ tag });
    if (gettingTag) {
      await Tag.updateOne(
        { _id: gettingTag },
        {
          tag,
          post_count: gettingTag.post_count + 1,
          $push: { posts: post },
        }
      );
    } else {
      const tags = new Tag({
        tag,
        post_count: 1,
        posts: post,
      });
      await tags.save();
    }
  });

  // save user
  await post.save();
}

async function updatePost(id, userParam) {
  const post = await Post.findById(id);

  // validate
  if (!post) throw "Post not found";

  // copy userParam properties to user
  Object.assign(post, userParam);

  await post.save();
}

async function deletePost(id) {
  await Post.findByIdAndRemove(id);
}
async function deleteAllPosts() {
  await Post.remove({});
}
