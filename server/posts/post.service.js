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
  getAllFirePosts,
  getAllEarthquakePosts,
  getAllCrimePosts,
  savefile
};

async function getAllPost() {
  return await Post.find();
}
async function getAllTyphoonPosts() {
  return await Post.find({ category: "TYPHOON" });
  // return await { message: "working" };
}
async function getAllFirePosts() {
  return await Post.find({ category: "FIRE" });
  // return await { message: "working" };
}
async function getAllEarthquakePosts() {
  return await Post.find({ category: "EARTHQUAKE" });
  // return await { message: "working" };
}
async function getAllCrimePosts() {
  return await Post.find({ category: "CRIME" });
  // return await { message: "working" };
}

async function getPostById(id) {
  return await Post.findById(id);
}

async function getAllPostsByPopularity() {
  return await Post.find({}).sort( { upvotes : -1 } );
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
savefile
async function savefile(req) {
  if (req.files === null) {
    return { msg: 'No file uploaded' };
  }
  const file = req.files.file;
  console.log(req.files.file)

  // file.mv(`${__dirname}/client/public/uploads/${file.name}`, err => {
  //   if (err) {
  //     console.error(err);
  //     return res.status(500).send(err);
  //   }

  //   res.json({ fileName: file.name, filePath: `/uploads/${file.name}` });
  // });
  return
}