const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ClothesSchema = new mongoose.Schema(
    {
        name: {type: String},
        designer: {type: String},
        rating: {type: Number},
        stock: {type: Number},
        category: {type: String},
        price: {type: Decimal128}

    }
)

module.exports = mongoose.model('Clothes', ClothesSchema);