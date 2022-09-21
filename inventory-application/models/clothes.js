const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ClothesSchema = new Schema(
    {
        name: {type: String},
        designer: {type: String},
        rating: {type: Number},
        stock: {type: Number},
        category: {type: String},
        price: {type: Number}

    }
)

//Virtual for this clothes url
ClothesSchema.virtual("url").get(function () {
    return "/catalog/clothes/" + this._id;
  });

module.exports = mongoose.model('Clothes', ClothesSchema);