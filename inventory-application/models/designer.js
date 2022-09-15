const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DesignerSchema = new Schema(
    {
        name: {type: String, required:true, maxLength:100},
        summary: {type: String},
        date: {type: String}
    }
)

module.exports = mongoose.model('Designer', DesignerSchema);

