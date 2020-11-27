//DITO NIYO ILALAGAY YUNG PINAKA LOGIC TALAGA WALANG ROUTING MGA FUNCTION LANG

const config = require("config.json");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const db = require("_helpers/db");
const Tag = db.Tag;

module.exports = {
  getAllTag,
  getByTag,
  getAllPostByTag,
  deleteTag,
  getPopularTags,
  getAllPostByTagByName,
};

async function getAllTag() {
  return await Tag.find();
}

async function getPopularTags() {
  return await Tag.find().sort({ post_count: "desc" }).limit(10).exec();
}

async function getAllPostByTag(id) {
  let holder = [];
  const post = await Tag.findById(id);
  for (var i = 0; i < post.posts.length; i++) {
    holder.push(post.posts[i]);
  }
  return holder;
}

async function getAllPostByTagByName(tag) {
  let holder = [];
  tag = "#" + tag;
  const post = await Tag.find({ tag: tag });
  return post[0].posts;
}

async function getByTag(tag) {
  return await Tag.find({ tag: tag });
}

async function deleteTag(tag) {
  await Tag.findOneAndDelete({ tag });
}
