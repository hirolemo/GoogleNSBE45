var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var mentorsSchema =new mongoose.Schema({
    Name: {type: String, required: true},
    Gender: {type: String, required: true},
    E-mail: {type: String, required: true},
    Occupation: {type: String, required: true},
    Education: {type: String, required: true},
    Areas of Interest: {type: Array, required: true},
    Keywords: {type: Array, required: false}
    Phone number: {type: Number, required: true}
});

var Mentor = mongoose.model("Mentors", mentorsSchema);
module.exports = Mentor;
