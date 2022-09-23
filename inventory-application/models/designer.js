const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DesignerSchema = new Schema(
    {
        name: {type: String, required:true, maxLength:100},
        date: {type: String},
        summary: {type: String}
        
    }
)

//Virtual url for designer

DesignerSchema.virtual("url").get(function() {
    return '/catalog/designer/'+ this._id;
})



module.exports = mongoose.model('Designer', DesignerSchema);
