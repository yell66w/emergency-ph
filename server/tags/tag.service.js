//DITO NIYO ILALAGAY YUNG PINAKA LOGIC TALAGA WALANG ROUTING MGA FUNCTION LANG 


const config = require('config.json');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('_helpers/db');
const Tag = db.Tag;

module.exports = {
	getAllTag,
    getByTag,
    getAllPostByTag,
    deleteTag
};

async function getAllTag() {
  return await Tag.find();
}


async function getAllPostByTag(id) {
	console.log()
	let holder = [];
	const post = await Tag.findById(id);
	console.log(post)
	for (var i = 0; i < post.posts.length; i++) {
		holder.push(post.posts[i])
	}
    return holder;
}

async function getByTag(tag) {
    return await Tag.find({ tag:tag });
}

async function deleteTag(tag) {
    await Tag.findOneAndDelete({tag});
}