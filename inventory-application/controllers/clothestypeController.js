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
    async.parallel(
        {
            item: function(callback){
                Clothes_type.findById(req.params.id).exec(callback);
            }
        },

        function (err, results) {
            if (err){
                return next(err);
            }

            if (results.item == null) {
                const err = new Error('Clothes type not found');
                err.status = 404;
                return next(err);
            }

            res.render('clothes_type_detail', {
                title:'Clothes type detail',
                clothes_type: results.item,
           });
        }
    );
}

//Display clothes_type create form on GET
exports.clothes_type_create_get = (req, res, next) => {
    res.render("clothes_type_form", {title: "Create Clothes Type"})
}

//Handle clothes_type create on POST
exports.clothes_type_create_post = [
    body('category_name', 'Name cannot be empty')
        .trim()
        .isLength({min:1})
        .escape(),
    body('description', 'description cannot be empty')
        .trim()
        .isLength({min:1})
        .escape(),
    (req,res,next) => {
        const errors = validationResult(req);

        const clothes_type = new Clothes_type({
            category: req.body.category_name,
            description: req.body.description
        });
        
        if (!errors.isEmpty()){
            res.render('clothes_type_form', {
                title: 'New Clothes Type',
                clothes_type,
                errors: errors.array(),
            });
        } else {
            clothes_type.save((err) => {
                if(err) return next(err);
                res.redirect('/');
                
            })
        }
    }
]

//Display clothes_type delete form on GET
exports.clothes_type_delete_get = (req, res) => {
    res.send('NOT IMPLEMENTED: clothes_type delete GET');
}

//Display clothes_type delete form on POST
exports.clothes_type_delete_post = (req, res) => {
    res.send('NOT IMPLEMENTED: clothes_type delete post');
}

//Display clothes_type update form on GET
exports.clothes_type_update_get = (req, res, next) => {
    async.parallel(
        {
            item: function (callback) {
                Clothes_type.findById(req.params.id).exec(callback);
            },
        },
        function(err, results) {
            if(err){
                return next(err);
            } 

            if (results.item == null) {
                const err = new Error('Clothes type not found');
                err.status = 404;
                return next(err);
            }

            res.render('clothes_type_form', {
                title: 'Clothes Type Form',
                clothes_type: results.item
            });
        }
    );
}


//Handle clothes_type update form on POST
exports.clothes_type_update_post = [
    body('category_name', 'Category cannot be empty')
        .trim()
        .isLength({min:1})
        .escape(),
    body('description', 'Description cannot be empty')
        .trim()
        .isLength({min:1})
        .escape(),
    (req, res, next) => {
        const errors = validationResult(req);

        const clothes_type = new Clothes_type({
            category: req.body.category_name,
            description: req.body.description,
            _id: req.params.id
        });

        if(!errors.isEmpty()){
            res.render('clothes_type_form', {
                title: 'Update clothes type',
                clothes_type,
                errors: errors.array(),
                update: true,
                error: "inCorrect clothes type",
            });
            } else {
                Clothes_type.findByIdAndUpdate(
                    req.params.id,
                    clothes_type,
                    {},
                    function(err, theclothestype){
                        if (err) return next(err);
                        res.redirect(theclothestype.url);
                    }
                )
            }
        }
]
