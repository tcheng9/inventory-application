const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DesignerSchema = new Schema(
    {
        name: {type: String, required:true, maxLength:100},
        date: {type: String},
        summary: {type: String}
        
    }
)

module.exports = mongoose.model('Designer', DesignerSchema);

