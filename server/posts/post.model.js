//AMO INI IT MODEL HIN USER HA DATABASE

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//ITO KAILANGAN NIYO SA PAG REGISTER EXCPET SA HASH AND CREATED DATE
const schema = new Schema({
  user_id: { type: String, required: true },
  user_name: { type: String, required: true },
  user_first_name: { type: String, required: true },
  user_last_name: { type: String, required: true },
  created_date: { type: Date, default: Date.now },
  updatedDate: { type: Date, default: Date.now },
  upvotes: { type: Number },
  status: { type: String, enum: ["PENDING", "RESCUED"], default: "PENDING" },
  post_title: { type: String, required: true },
  post_description: { type: String, required: true },
  photos: [],
  tags: [],
  category: { type: String, enum: ["TYPHOON", "FIRE", "EARTHQUAKE", "CRIME"] },
});

schema.set("toJSON", {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret) {
    delete ret._id;
    delete ret.hash;
  },
});

module.exports = mongoose.model("Post", schema);
