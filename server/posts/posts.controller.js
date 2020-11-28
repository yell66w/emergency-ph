//DITO NIYO ILALAGAY YUNG MGA ROUTES TAPOS YUNG MGA FUNCTION NA GAGAMITIN NYA SA SERVICE
const express = require("express");
const router = express.Router();
const postService = require("./post.service");

// routes

router.get("/", getAllPost);
router.get("/typhoon", getAllTyphoonPosts);
router.get("/typhoon/popular", getAllTyphoonByPopularity);
// router.get("/typhoon/completed", getAllTyphoonPostsByCompleted);
router.get("/fire", getAllFirePosts);
router.get("/fire/popular", getAllFirePostsByPopularity);
// router.get("/fire/completed", getAllFirePostsByCompleted);
router.get("/earthquake", getAllEarthquakePosts);
router.get("/earthquake/popular", getAllEarthquakePostsByPopularity);
// router.get("/earthquake/completed", getAllEarthquakePostsByCompleted);
router.get("/crimes", getAllCrimePosts);
router.get("/crimes/popular", getAllCrimePostsByPopularity);
// router.get("/crimes/completed", getAllCrimePostsByCompleted);
router.post("/file", savefile);
router.get("/latest", getAllsortBydatecreated);
router.get("/completed", getAllByStatus);
//ilagay mo sa taas ng /:id yung mga endpoints mo kasi yun yung rule
router.get("/popular", getAllPostsByPopularity);
router.put("/popular/upvote/add", addupvote);
router.put("/popular/upvote/minus", minusupvote);
router.get("/user/relation/:id", getUserPostRelationship);

// router.get('/lastest', getAllsortBydatecreated);
// router.get('/completed', getAllByStatus);
router.get("/:id", getPostById);

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

function getUserPostRelationship(req, res, next) {
  postService
    .getUserPostRelationship(req.params.id, req.user.sub)
    .then((posts) => res.json(posts))
    .catch((err) => next(err));
}

function addupvote(req, res, next) {
  postService
    .addupvote(req.body.id, req.user.sub)
    .then(() => res.json({}))
    .catch((err) => next(err));
}

function minusupvote(req, res, next) {
  postService
    .minusupvote(req.body.id, req.user.sub)
    .then(() => res.json({}))
    .catch((err) => next(err));
}

function getAllsortBydatecreated(req, res, next) {
  postService
    .getAllsortBydatecreated()
    .then((posts) => res.json(posts))
    .catch((err) => next(err));
}

function getAllByStatus(req, res, next) {
  postService
    .getAllByStatus()
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

function getAllTyphoonByPopularity(req, res, next) {
  postService
    .getAllTyphoonByPopularity()
    .then((posts) => res.json(posts))
    .catch((err) => next(err));
}

function getAllFirePostsByPopularity(req, res, next) {
  postService
    .getAllFirePostsByPopularity()
    .then((posts) => res.json(posts))
    .catch((err) => next(err));
}

function getAllFirePosts(req, res, next) {
  postService
    .getAllFirePosts()
    .then((posts) => res.json(posts))
    .catch((err) => next(err));
}
function getAllEarthquakePosts(req, res, next) {
  postService
    .getAllEarthquakePosts()
    .then((posts) => res.json(posts))
    .catch((err) => next(err));
}

function getAllEarthquakePostsByPopularity(req, res, next) {
  postService
    .getAllEarthquakePostsByPopularity()
    .then((posts) => res.json(posts))
    .catch((err) => next(err));
}
function getAllCrimePosts(req, res, next) {
  postService
    .getAllCrimePosts()
    .then((posts) => res.json(posts))
    .catch((err) => next(err));
}

function getAllCrimePostsByPopularity(req, res, next) {
  postService
    .getAllCrimePostsByPopularity()
    .then((posts) => res.json(posts))
    .catch((err) => next(err));
}
function createPost(req, res, next) {
  postService
    .createPost(req.body, req.user.sub, req)
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

function savefile(req, res, next) {
  postService
    .savefile(req)
    .then((data) => res.json(data))
    .catch((err) => next(err));
}
