//AMO INI IT MODEL HIN USER HA DATABASE


const mongoose = require('mongoose');
const Schema = mongoose.Schema;


//ITO KAILANGAN NIYO SA PAG REGISTER EXCPET SA HASH AND CREATED DATE
const schema = new Schema({
    tag: { type: String, required: true },
    post_count: { type: Number, required: true },
    posts: { type: Array},
    created_date: { type: Date, default: Date.now }
});

schema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        delete ret._id;
        delete ret.hash;
    }
});

module.exports = mongoose.model('Tags', schema);