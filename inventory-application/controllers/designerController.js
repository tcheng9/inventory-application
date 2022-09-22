const Clothes = require('../models/clothes');
const Clothes_type = require('../models/clothes-type');
const Designer = require('../models/designer');
const async = require('async');

const { body, validationResult } = require("express-validator");


//Display list of all designer
exports.designer_list = function(req, res, next){
    Designer.find({}, "name date summary")
        .exec(function (err, list_designer) {
            if (err) {
                return next(err);
            } else {
                res.render("designer_list", {title: "Designer List", designer_list: list_designer})
            }
        })
    }

//Display details about a specific article of designer
exports.designer_details = (req, res, next) => {
    async.parallel(
        {
            item: function(callback){
                Designer.findById(req.params.id).exec(callback);
            },
        },
            function (err, results){
                if (err){
                    return next(err);
                }

                if (results.item == null) {
                    const err = new Error("Designer not found");
                    err.status = 404;
                    return next(err);
                }

                res.render('designer_detail', {
                    title: 'Designer detail', 
                    designer: results.item
                })
            }
        
    )
}

//Display designer create form on GET
exports.designer_create_get = (req, res, next) => {
    res.render("designer_form", {title: "Create Designer"})
}

//Handle designer create on POST
exports.designer_create_post = [
    body('designer_name', 'designer_name cannot be empty')
        .trim()
        .isLength({min:1})
        .escape(),
    body('founded_date', 'founded_date cannot be empty')
        .trim()
        .isLength({min:1})
        .escape(),
    body('description', 'description cannot be empty')
        .trim()
        .isLength({min:1})
        .escape(),
    (req,res,next) => {
        const errors = validationResult(req);

        const designer = new Designer({
            name: req.body.designer_name,
            date: req.body.founded_date,
            summary: req.body.description
        });
        
        if (!errors.isEmpty()){
            res.render(errors);
            res.render('clothes_type_form', {
                title: 'New Clothes Type',
                designer,
                errors: errors.array(),
            });
        } else {
            designer.save((err) => {
                if(err) return next(err);
                res.redirect('/');
                
            })
        }
    }
]
//Display designer delete form on GET
exports.designer_delete_get = (req, res) => {
    res.send('NOT IMPLEMENTED: designer delete GET');
}

//Display designer delete form on POST
exports.designer_delete_post = (req, res) => {
    res.send('NOT IMPLEMENTED: designer delete post');
}

//Display designer update form on GET
exports.designer_update_get = (req, res, next) => {
    async.parallel(
        {
            item: function (callback) {
                Designer.findById(req.params.id).exec(callback);
            },
        },
        function (err, results){
            if (err){
                // res.render('error here1')
                return next(err);
            }

            if (results.item == null){
                // res.render('error here1')
                const err = new Error ("Designer not found");
                err.status = 404;
                return next(err);
            }
            
            res.render('designer_form', {
                title: 'Designer detail', 
                designer: results.item
            });

        }
    );
}


//Handle designer update form on POST
exports.designer_update_post = [
    body('designer_name', 'designer_name cannot be empty')
    .trim()
    .isLength({min:1})
    .escape(),
    body('founded_date', 'founded_date cannot be empty')
        .trim()
        .isLength({min:1})
        .escape(),
    body('description', 'description cannot be empty')
        .trim()
        .isLength({min:1})
        .escape(),
    (req, res,next) => {
        const errors = validationResult(req);

        const designer = new Designer({
            name: req.body.designer_name,
            date: req.body.founded_date,
            summary: req.body.description,
            _id: req.params.id,
        });

        if (!errors.isEmpty()){
            res.render('designer_form', {
                title: 'Update designer',
                designer,
                errors: errors.array(),
                update: true,
                error: 'Incorrect pasword',
            });
        } else {
            Designer.findByIdAndUpdate(
                req.params.id,
                designer,
                {},
                function (err, theDesigner){
                    if(err){
                        return next(err);
                    } 
                    res.redirect(theDesigner.url);
                }
            )
        }


    }
]