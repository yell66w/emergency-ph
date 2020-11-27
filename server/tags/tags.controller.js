//DITO NIYO ILALAGAY YUNG MGA ROUTES TAPOS YUNG MGA FUNCTION NA GAGAMITIN NYA SA SERVICE
const express = require("express");
const router = express.Router();
const tagService = require("./tag.service");

// routes

router.get("/", getAllTag);
router.get("/popular", getPopularTags);
router.get("/post/name/:name", getAllPostByTagByName);
router.get("/post/:id", getAllPostByTag);
router.get("/:id", getByTag);
router.delete("/:id", deleteTag);

module.exports = router;
function getAllTag(req, res, next) {
  tagService
    .getAllTag()
    .then((posts) => res.json(posts))
    .catch((err) => next(err));
}

function getPopularTags(req, res, next) {
  tagService
    .getPopularTags()
    .then((posts) => res.json(posts))
    .catch((err) => next(err));
}

function getAllPostByTag(req, res, next) {
  tagService
    .getAllPostByTag(req.params.id)
    .then((user) => (user ? res.json(user) : res.sendStatus(404)))
    .catch((err) => next(err));
}
function getAllPostByTagByName(req, res, next) {
  tagService
    .getAllPostByTagByName(req.params.name)
    .then((user) => (user ? res.json(user) : res.sendStatus(404)))
    .catch((err) => next(err));
}
function getByTag(req, res, next) {
  tagService
    .getByTag(req.params.id)
    .then((user) => (user ? res.json(user) : res.sendStatus(404)))
    .catch((err) => next(err));
}

function deleteTag(req, res, next) {
  tagService
    .deleteTag(req.params.id)
    .then(() => res.json({}))
    .catch((err) => next(err));
}
