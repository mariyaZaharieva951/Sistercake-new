const { Schema, model} = require('mongoose');


const schema = new Schema({
    _id: { type: String, require:true},
    imgUrl: { type: String, required: true }

});

const Cake = model('Cake', schema)
module.exports = Cake;