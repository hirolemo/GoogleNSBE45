var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var mentorsSchema =new mongoose.Schema({
    Name: {type: String, required: true},
    Gender: {type: String, required: true},
    Email: {type: String, required: true},
    Occupation: {type: String, required: true},
    Education: {type: String, required: true},
    AreasOfInterest: {type: Array, required: true},
    Keywords: {type: Array, required: false},
    PhoneNumber: {type: Number, required: true}
});

var Mentor = mongoose.model("Mentors", mentorsSchema);
module.exports = Mentor;
