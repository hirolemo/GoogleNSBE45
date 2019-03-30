var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var messageSchema = new mongoose.Schema({
  text:{
      type: String,
      required: true
  },
  username:{
    type: String,
    required: true
  }

});

var Message = mongoose.model("messages", messageSchema);
module.exports = Message;
