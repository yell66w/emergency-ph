//TO NIYO ILALAGAY YUNG PINAKA LOGIC TALAGA WALANG ROUTING MGA FUNCTION LANG

const config = require("config.json");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const db = require("_helpers/db");
const User = db.User;
const Post = db.Post;
const Tag = db.Tag;
const Upvote = db.Upvote;

module.exports = {
  getAllPost,
  getPostById,
  getAllPostsByPopularity,
  getAllsortBydatecreated,
  getAllByStatus,
  createPost,
  updatePost,
  deletePost,
  getAllTyphoonPosts,
  deleteAllPosts,
  getAllFirePosts,
  getAllEarthquakePosts,
  getAllCrimePosts,
  savefile,
  addupvote,
  minusupvote,
  getAllTyphoonByPopularity,
  getAllFirePostsByPopularity,
  getAllEarthquakePostsByPopularity,
  getAllCrimePostsByPopularity,
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
  return await Post.find({}).sort({ upvotes: 1 });
}

async function getAllTyphoonByPopularity() {
  return await Post.find({ category: "TYPHOON" }).sort({ upvotes: -1 });
}
async function getAllFirePostsByPopularity() {
  return await Post.find({ category: "FIRE" }).sort({ upvotes: -1 });
}

async function getAllEarthquakePostsByPopularity() {
  return await Post.find({ category: "EARTHQUAKE" }).sort({ upvotes: -1 });
}
async function getAllCrimePostsByPopularity() {
  return await Post.find({ category: "CRIME" }).sort({ upvotes: -1 });
}
async function getAllsortBydatecreated(created_date) {
  return await Post.find({ created_date: { $exists: true } }).sort({
    created_date: -1,
  });
}

async function getAllByStatus(status) {
  return await Post.find({ status: "RESCUED" });
}

async function createPost(userParam, userid, req) {
  const userData = await User.findById(userid);

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

async function addupvote(postid, userid) {
  const oldupvote = await Upvote.findOne({ post_id: postid , user_id : userid});
  if (oldupvote == null){
    //adding up new vote
    const upvote = new Upvote({
      post_id:postid,
      user_id:userid
    })
    await upvote.save();

    const post = await Post.findById(postid);
    // validate
    if (!post) throw "Post not found";
    const obj = {
      upvotes: post.upvotes + 1,
    };
    Object.assign(post, obj);
    await post.save();

  }else{
    if (oldupvote.liked == false) {
      //changing old vote
      const upvote = { liked:true } 
      // copy upvote properties to oldupvote
      Object.assign(oldupvote, upvote);
      await oldupvote.save();

      const post = await Post.findById(postid);
      // validate
      if (!post) throw "Post not found";
      const obj = {
        upvotes: post.upvotes + 1,
      };
      Object.assign(post, obj);
      await post.save();
    }else{
      //nothing
    }
  }
}
async function minusupvote(postid, userid) {
  const oldupvote = await Upvote.findOne({ post_id: postid , user_id : userid});
  if(oldupvote.liked == true){
    const upvote = { liked:false } 
    // copy upvote properties to oldupvote
    Object.assign(oldupvote, upvote);
    await oldupvote.save();

    const post = await Post.findById(postid);
    // validate
    if (!post) throw "Post not found";
    const obj = {
      upvotes: post.upvotes - 1,
    };
    Object.assign(post, obj);
    await post.save();
  }else{
    //nothing
  }

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

async function savefile(req) {
  if (req.files === null) {
    return { msg: "No file uploaded" };
  }
  const file = req.files.file;

  file.mv(`../client/public/uploads/${file.name}`, (err) => {
    if (err) {
      return {
        error: err,
      };
    }
    return { fileName: file.name, filePath: `/uploads/${file.name}` };
  });
  return;
}
