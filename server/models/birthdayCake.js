const { Schema, model} = require('mongoose');


const schema = new Schema({
    _id: { type: String, require:true},
    imgUrl: { type: String, required: true }

});

const BirthdayCake = model('BirthdayCake', schema)
module.exports = BirthdayCake;