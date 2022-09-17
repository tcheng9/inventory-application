const clothes = require('../models/clothes');
const clothes_type = require('../models/clothes-type');
const designer = require('../models/designer');
const async = require('async');


exports.index = (req, res) => {

}

//Display list of all designer
exports.designer_list = function(req, res, next){
    res.send('NOT IMPLEMENTED: designer list');
}

//Display details about a specific article of designer
exports.designer_details = (req, res, next) => {
    res.send('NOT IMPLEMENTED: designer details');
}

//Display designer create form on GET
exports.designer_create_get = (req, res, next) => {
    res.send('NOT IMPLEMENTED: designer create get');
}

//Handle designer create on POST
exports.designer_create_post = (req, res) => {
    res.send('NOT IMPLEMENTED: designer delete GET');
}

//Display designer delete form on GET
exports.designer_delete_get = (req, res) => {
    res.send('NOT IMPLEMENTED: designer delete GET');
}

//Display designer delete form on POST
exports.designer_delete_post = (req, res) => {
    res.send('NOT IMPLEMENTED: designer delete post');
}

//Display designer update form on GET
exports.designer_update_get = (req, res) => {
    res.send('NOT IMPLEMENTED: designerupdate get');
}


//Handle designer update form on POST
exports.designer_update_post = (req, res) => {
    res.send('NOT IMPLEMENTED: designerupdate post');
}

