var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var menteesSchema =new mongoose.Schema({
    username: {type: String, required: false}
});

var Mentee = mongoose.model("Mentees", menteesSchema);
module.exports = Mentee;
