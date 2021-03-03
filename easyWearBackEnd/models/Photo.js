const mongoose = require("mongoose");
var Schema = mongoose.Schema;
var Photo = new Schema({
  url: {type:String,default:''},
  description: {type:String,default:''},
  datecreation: {type:String,default:Date.now},
});
module.exports = mongoose.model("Photos", Photo);