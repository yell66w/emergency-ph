//DITO NIYO ILALAGAY YUNG PINAKA LOGIC TALAGA WALANG ROUTING MGA FUNCTION LANG

const config = require("config.json");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const db = require("_helpers/db");
const User = db.User;
const Notification = db.Notification;

module.exports = {
  getAll,
  getById,
  create,
  update,
  delete: _delete,
  getMyNotifications,
};

async function getAll() {
  return await Notification.find();
}

async function getById(id) {
  return await Notification.findById(id);
}

async function getMyNotifications(volunteer_id) {
  return await Notification.find({ volunteer_id });
}

async function create(userParam, userid) {
  const userdata = await User.findById(userid);
  const volunterdata = await User.findById(userParam.volunteer_id);
  const notification = new Notification({
    volunteer_id: volunterdata.id,
    volunteer_name: volunterdata.username,
    victim_id: userdata.id,
    victim_name: userdata.username,
    description: userParam.description,
  });
  console.log(volunterdata);
  await notification.save();
}

async function update(id, userParam) {
  const notification = await Notification.findById(id);
  // copy userParam properties to user
  Object.assign(notification, userParam);

  await notification.save();
}

async function _delete(id) {
  await Notification.findByIdAndRemove(id);
}
