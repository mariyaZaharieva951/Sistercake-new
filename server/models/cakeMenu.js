const { Schema, model} = require('mongoose');


const schema = new Schema({
    _id: { type: String, require:true},
    price: { type: String, required: true },
    imgUrl: { type: String, required: true }

});

const CakeMenu = model('CakeMenu', schema)
module.exports = CakeMenu;