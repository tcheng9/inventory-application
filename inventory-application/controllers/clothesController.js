const clothes = require('../models/clothes');
const clothes_type = require('../models/clothes-type');
const designer = require('../models/designer');
const async = require('async');


exports.index = (req, res) => {

}

//Display list of all clothing
exports.clothes_list = function(req, res, next){
    res.send('NOT IMPLEMENTED: clothes list');
}

//Display details about a specific article of clothing
exports.clothes_details = (req, res, next) => {
    res.send('NOT IMPLEMENTED: clothes details');
}

//Display clothes create form on GET
exports.clothes_create_get = (req, res, next) => {
    res.send('NOT IMPLEMENTED: clothes create get');
}

//Handle clothes create on POST
exports.clothes_create_post = (req, res) => {
    res.send('NOT IMPLEMENTED: clothes delete GET');
}


//Display clothes delete form on GET
exports.clothes_delete_get = (req, res) => {
    res.send('NOT IMPLEMENTED: clothes delete GET');
}

//Display clothes delete form on POST
exports.clothes_delete_post = (req, res) => {
    res.send('NOT IMPLEMENTED: clothes delete post');
}

//Display clothes update form on GET
exports.clothes_update_get = (req, res) => {
    res.send('NOT IMPLEMENTED: clothes update get');
}


//Handle clothes update form on POST
exports.clothes_update_post = (req, res) => {
    res.send('NOT IMPLEMENTED: clothes update post');
}

