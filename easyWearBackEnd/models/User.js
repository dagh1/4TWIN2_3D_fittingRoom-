const mongoose = require("mongoose");
const Photo = require("./Photo");
const Event = require("./event");
var Schema = mongoose.Schema;
var User = new Schema({
  firstname: String,
  lastname: String,
  age: Number,
  gender: [String],
  roles: [String],
  username: String,
  password: String,
  email: String,
  phone: Number,
  photo: String,
  gallerie: [{ type: Schema.Types.ObjectId, ref: "Photo" }],
  size: Number,
  allergies: [String],
  colors: [String],
  events: [{ type: Schema.Types.ObjectId, ref: "Event" }],
});
module.exports = mongoose.model("Users", User);