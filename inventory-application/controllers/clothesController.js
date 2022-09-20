const Clothes = require('../models/clothes');
const Clothes_type = require('../models/clothes-type');
const Designer = require('../models/designer');
const async = require('async');


exports.index = (req, res) => {
    async.parallel(
        {}, 
        function (err, results) {
            res.render("index", {
                title: 'Local Catalog Home',
                error: err,
                data:results,
            })
        }
    )
    
}

//Display list of all clothing
exports.clothes_list = function(req, res, next){
    Clothes.find({}, "name designer rating stock category price")
        .exec(function (err, list_clothes){
            if (err) {
                return next(err);
            } else {
                // Successful so render
                res.render("clothes_list", {title: "Clothes List", clothes_list: list_clothes})
            }
        })
}

//Display details about a specific article of clothing
exports.clothes_details = (req, res, next) => {
    res.send('NOT IMPLEMENTED: clothes details');
}

//Display clothes create form on GET
exports.clothes_create_get = (req, res, next) => {
   res.render("clothes_form", {title: "Create Clothes"});
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

