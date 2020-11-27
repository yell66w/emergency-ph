//DITO NIYO ILALAGAY YUNG MGA ROUTES TAPOS YUNG MGA FUNCTION NA GAGAMITIN NYA SA SERVICE
const express = require('express');
const router = express.Router();
const tagService = require('./tag.service');

// routes

router.get('/', getAllTag);
router.get('/:id', getByTag);
router.get('/post/:id', getAllPostByTag);
router.delete('/:id', deleteTag);

module.exports = router;
function getAllTag(req, res, next) {
    tagService.getAllTag()
        .then(posts => res.json(posts))
        .catch(err => next(err));
}

function getAllPostByTag(req, res, next) {
    tagService.getAllPostByTag(req.params.id)
        .then(user => user ? res.json(user) : res.sendStatus(404))
        .catch(err => next(err));
}
function getByTag(req, res, next) {
    tagService.getByTag(req.params.id)
        .then(user => user ? res.json(user) : res.sendStatus(404))
        .catch(err => next(err));
}

function deleteTag(req, res, next) {
    tagService.deleteTag(req.params.id)
        .then(() => res.json({}))
        .catch(err => next(err));
}