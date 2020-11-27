//DITO NIYO ILALAGAY YUNG PINAKA LOGIC TALAGA WALANG ROUTING MGA FUNCTION LANG 


const config = require('config.json');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('_helpers/db');
const Tag = db.Tag;

module.exports = {
    getByTag,
    deleteTag,
};

async function getByTag(tag) {
    return await Tag.find({ tag:tag });
}

async function deleteTag(tag) {
    await Tag.findOneAndDelete({tag});
}