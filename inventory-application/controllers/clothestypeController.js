const Clothes = require('../models/clothes');
const Clothes_type = require('../models/clothes-type');
const Designer = require('../models/designer');
const async = require('async');

const { body, validationResult } = require("express-validator");


//Display list of all clothes_type
exports.clothes_type_list = function(req, res, next){
    Clothes_type.find({}, 'category description')
        .exec(function (err, list_clothes_type) {
        if (err) {
            return next(err);
        } else {
            res.render("clothes_type_list", {title: "Clothes Type List", clothes_type_list: list_clothes_type})
        }
    
    })
}

//Display details about a specific article of clothes_type
exports.clothes_type_details = (req, res, next) => {
    res.send('NOT IMPLEMENTED: clothes_type details');
}

//Display clothes_type create form on GET
exports.clothes_type_create_get = (req, res, next) => {
    res.render("clothes_type_form", {title: "Create Clothes Type"})
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

