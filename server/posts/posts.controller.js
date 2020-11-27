﻿//DITO NIYO ILALAGAY YUNG MGA ROUTES TAPOS YUNG MGA FUNCTION NA GAGAMITIN NYA SA SERVICE
const express = require("express");
const router = express.Router();
const postService = require("./post.service");

// routes

router.get("/", getAllPost);
router.get("/typhoon", getAllTyphoonPosts);

//ilagay mo sa taas ng /:id yung mga endpoints mo kasi yun yung rule

router.get("/:id", getPostById);
router.get("/popular", getAllPostsByPopularity);
// router.get('/lastest', getAllsortBydatecreated);
// router.get('/completed', getAllByStatus);
router.post("/create", createPost);
router.put("/:id", updatePost);
router.delete("/:id", deletePost);
router.delete("/", deleteAllPosts);

module.exports = router;

function getAllPostsByPopularity(req, res, next) {
  postService
    .getAllPostsByPopularity()
    .then((posts) => res.json(posts))
    .catch((err) => next(err));
}

function getAllPost(req, res, next) {
  postService
    .getAllPost()
    .then((posts) => res.json(posts))
    .catch((err) => next(err));
}
function getAllTyphoonPosts(req, res, next) {
  postService
    .getAllTyphoonPosts()
    .then((posts) => res.json(posts))
    .catch((err) => next(err));
}

function createPost(req, res, next) {
  postService
    .createPost(req.body, req.user.sub)
    .then(() =>
      res.json({
        created: "true",
      })
    )
    .catch((err) => next(err));
}
function getPostById(req, res, next) {
  postService
    .getPostById(req.params.id)
    .then((user) => (user ? res.json(user) : res.sendStatus(404)))
    .catch((err) => next(err));
}

function updatePost(req, res, next) {
  postService
    .updatePost(req.params.id, req.body)
    .then(() => res.json({}))
    .catch((err) => next(err));
}

function deletePost(req, res, next) {
  postService
    .deletePost(req.params.id)
    .then(() => res.json({}))
    .catch((err) => next(err));
}

function deleteAllPosts(req, res, next) {
  postService
    .deleteAllPosts()
    .then(() => res.json({}))
    .catch((err) => next(err));
}
