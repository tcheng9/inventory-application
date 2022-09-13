const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ClothesTypeSchema = new Schema(
    {
        category: {type: String},
        description: {type:String},
    }
);


module.exports = mongoose.model('Clothes Type', ClothesTypeSchema)