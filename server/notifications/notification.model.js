//AMO INI IT MODEL HIN USER HA DATABASE


const mongoose = require('mongoose');
const Schema = mongoose.Schema;


//ITO KAILANGAN NIYO SA PAG REGISTER EXCPET SA HASH AND CREATED DATE
const schema = new Schema({
    volunteer_id: { type: String,  required: true },
    victim_id: { type: String,  required: true },
    description: { type: String,  required: true },
    victim_name: { type: String,  required: true },
    volunteer_name: { type: String,  required: true },
    seen: { type: Boolean,   default: false},
    respond: { type: Boolean,   default: false},
    createdDate: { type: Date, default: Date.now }
});

schema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        delete ret._id;
        delete ret.hash;
    }
});

module.exports = mongoose.model('Notification', schema);