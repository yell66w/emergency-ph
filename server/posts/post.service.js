//DITO NIYO ILALAGAY YUNG PINAKA LOGIC TALAGA WALANG ROUTING MGA FUNCTION LANG 


const config = require('config.json');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('_helpers/db');
const Post = db.Post;

module.exports = {
    getAllPost,
    getPostById,
    createPost,
    updatePost,
    deletePost
};

async function getAllPost() {
    return await Post.find();
}

async function getPostById(id) {
    return await Post.findById(id);
}

async function createPost(userParam, userid) {
    // validate
    const post = new Post({
        user_id: userid,
        user_name: userParam.username,
        upvotes: userParam.upvotes,
        status: userParam.status,
        post_title: userParam.title,
        post_description: userParam.description,
        photos: userParam.photos,
        tags: userParam.tags,
        category: userParam.category
    });
    // save user
    await post.save();
}

async function updatePost(id, userParam) {
    const post = await Post.findById(id);

    // validate
    if (!post) throw 'Post not found';

    // copy userParam properties to user
    Object.assign(post, userParam);

    await post.save();
}

async function deletePost(id) {
    await Post.findByIdAndRemove(id);
}