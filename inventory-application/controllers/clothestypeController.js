const clothes = require('../models/clothes');
const clothes_type = require('../models/clothes-type');
const designer = require('../models/designer');
const async = require('async');




//Display list of all clothes_type
exports.clothes_type_list = function(req, res, next){
    res.send('NOT IMPLEMENTED: clothes_type list');
}

//Display details about a specific article of clothes_type
exports.clothes_type_details = (req, res, next) => {
    res.send('NOT IMPLEMENTED: clothes_type details');
}

//Display clothes_type create form on GET
exports.clothes_type_create_get = (req, res, next) => {
    res.send('NOT IMPLEMENTED: clothes_type create get');
}

//Handle clothes_type create on POST
exports.clothes_type_create_post = (req, res) => {
    res.send('NOT IMPLEMENTED: clothes_type delete GET');
}

//Display clothes_type delete form on GET
exports.clothes_type_delete_get = (req, res) => {
    res.send('NOT IMPLEMENTED: clothes_type delete GET');
}

//Display clothes_type delete form on POST
exports.clothes_type_delete_post = (req, res) => {
    res.send('NOT IMPLEMENTED: clothes_type delete post');
}

//Display clothes_type update form on GET
exports.clothes_type_update_get = (req, res) => {
    res.send('NOT IMPLEMENTED: clothes_type update get');
}


//Handle clothes_type update form on POST
exports.clothes_type_update_post = (req, res) => {
    res.send('NOT IMPLEMENTED: clothes_type update post');
}

