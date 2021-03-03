const mongoose = require("mongoose");
const User = require("./User");
var Schema = mongoose.Schema;
var event = new Schema({
  eventname: String,
  datestart: Date,
  dateend: Date,
  photo: String,
  creator: { type: Schema.Types.ObjectId, ref: "User" },
  participants: [{ type: Schema.Types.ObjectId, ref: "User" }],
});
module.exports = mongoose.model("events", event);