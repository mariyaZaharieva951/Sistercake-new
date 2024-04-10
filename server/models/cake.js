const { Schema, model} = require('mongoose');


const schema = new Schema({
    price: {type: String}
    
    
});

const Cake = model('Cake', schema)
module.exports = Cake;