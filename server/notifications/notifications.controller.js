//DITO NIYO ILALAGAY YUNG MGA ROUTES TAPOS YUNG MGA FUNCTION NA GAGAMITIN NYA SA SERVICE
const express = require("express");
const router = express.Router();
const notificationService = require("./notification.service");

// routes
router.post("/create/", create);
router.get("/", getAll);
router.get("/my-notifications", getMyNotifications);

router.get("/volunteerNotif", volunteerNotification);
router.get("/:id", getById);
router.put("/:id", update);
router.delete("/:id", _delete);

module.exports = router;
function create(req, res, next) {
  notificationService
    .create(req.body, req.user.sub)
    .then(() =>
      res.json({
        registered: "true",
      })
    )
    .catch((err) => next(err));
}
function getAll(req, res, next) {
  notificationService
    .getAll()
    .then((users) => res.json(users))
    .catch((err) => next(err));
}

function getMyNotifications(req, res, next) {
  notificationService
    .getMyNotifications(req.user.sub)
    .then((users) => res.json(users))
    .catch((err) => next(err));
}

function volunteerNotification(req, res, next) {
  notificationService
    .getByIdVolunteer(req.user.sub)
    .then((user) => (user ? res.json(user) : res.sendStatus(404)))
    .catch((err) => next(err));
}

function getById(req, res, next) {
  notificationService
    .getById(req.params.id)
    .then((user) => (user ? res.json(user) : res.sendStatus(404)))
    .catch((err) => next(err));
}

function update(req, res, next) {
  notificationService
    .update(req.params.id, req.body)
    .then(() => res.json({}))
    .catch((err) => next(err));
}

function _delete(req, res, next) {
  notificationService
    .delete(req.params.id)
    .then(() => res.json({}))
    .catch((err) => next(err));
}
