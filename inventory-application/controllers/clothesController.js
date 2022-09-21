const Clothes = require('../models/clothes');
const Clothes_type = require('../models/clothes-type');
const Designer = require('../models/designer');
const async = require('async');
const { body, validationResult } = require("express-validator");


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
    async.parallel(
        {
            clothes: function (callback) {
                Clothes.findById(req.params.id).exec(callback);
            },
            clothes_type: function(callback) {
                Clothes_type.find({clothes: req.params.id}, "clothes type explained").exec(callback);
            },
        },

        function (err, results){
            if (err){
                return next(err);
            }

            if (results.clothes == null){
                var err = new Error("Clothes not found");
                err.status = 404;
                return next(err);
            }

            //Successful so render
            res.render("clothes_detail", {
                title: "Clothes Detail",
                clothes: results.clothes,
                clothes_type: results.clothes_type,
            });
        }
    );
};

//Display clothes create form on GET
exports.clothes_create_get = (req, res, next) => {
   res.render("clothes_form", {title: "Create Clothes"});
}
//Handle clothes create on POST
exports.clothes_create_post = [ 
    body('name', 'Name cannot be empty')
        .trim()
        .isLength({min:1})
        .escape(),
    body('designer', 'Designer cannot be empty')
        .trim()
        .isLength({min:1})
        .escape(),
    body('rating', 'rating cannot be empty')
        .trim()
        .isLength({min:1})
        .escape(),
    body('stock', 'Stock cannot be empty')
        .trim()
        .isLength({min:1})
        .escape(),
    body('category', 'Category cannot be empty')
        .trim()
        .isLength({min:1})
        .escape(),
    body('price', 'Price cannot be empty')
        .trim()
        .isLength({min:1})
        .escape(),
        (req, res,next) => {
            const errors = validationResult(req);
    
            const clothes = new Clothes({
                name: req.body.name,
                designer: req.body.designer,
                rating: req.body.rating,
                stock: req.body.category,
                category: req.body.category,
                price: req.body.price,
            });

            if (!errors.isEmpty()){    
                res.render('clothes_form', {
                    title: 'New Clothes',
                    clothes,
                    errors: errors.array(),
                });
            } else {
                category.save((err) => {
                    if (err) return next(err);
                });
        
            }
         }
    
    ]



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

