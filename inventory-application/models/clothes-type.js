const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ClothesTypeSchema = new Schema(
    {
        category: {type: String},
        description: {type:String},
    }
);
//Virtual for this clothes type  url


ClothesTypeSchema.virtual("url").get(function() {
    return "/catalog/clothes_type/" + this._id;
});


module.exports = mongoose.model('Clothes Type', ClothesTypeSchema)