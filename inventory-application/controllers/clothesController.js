const Clothes = require('../models/clothes');
const Clothes_type = require('../models/clothes-type');
const Designer = require('../models/designer');
const async = require('async');
const { body, validationResult } = require("express-validator");
const clothes = require('../models/clothes');


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
            item: function (callback) {
                Clothes.findById(req.params.id).exec(callback);
            },
        },
        function (err, results){
            if (err){
                // res.render('error here1')
                return next(err);
            }

            if (results.item == null){
                // res.render('error here1')
                const err = new Error ("Clothes not found");
                err.status = 404;
                return next(err);
            }
            
            res.render('clothes_detail', {
                title: 'Clothes detail', 
                clothes: results.item
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
    body('clothes_name', 'Name cannot be empty')
        .trim()
        .isLength({min:1})
        .escape(),
    body('designer_name', 'Designer cannot be empty')
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
    body('clothes_type_name', 'Category cannot be empty')
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
                name: req.body.clothes_name,
                designer: req.body.designer_name,
                rating: req.body.rating,
                stock: req.body.stock,
                category: req.body.clothes_type_name,
                price: req.body.price,
            });

            if (!errors.isEmpty()){    
                
                res.render('clothes_form', {
                    title: 'New Clothes',
                    clothes,
                    errors: errors.array(),
                    
                });
            } else {
                clothes.save((err) => {
                    if (err) return next(err);
                    res.redirect('/');
                });
        
            }
         }
    
    ]



//Display clothes delete form on GET
exports.clothes_delete_get = (req, res, next) => {

    async.parallel(
        {
            item: function(callback){
                Clothes.findById(req.params.id).exec(callback);
            },
        },
        function(err, results){
            if(err) return next(err);

            if (results.item == null){
                
                res.redirect('/catalog/clothes/');
            }

            res.render('clothes_delete', {
                title: 'Remove Clothes',
                clothes: results.item,
            });
        }

    )
}

//Display clothes delete form on POST
exports.clothes_delete_post = (req, res, next) => {
    async.parallel(
        {
          item: function (callback) {
            Clothes.findById(req.params.clothesid).exec(callback);
          },
          
        },
        function (err, results) {
          if (err) {
            
            return next(err);
          }

          Clothes.findByIdAndRemove(req.body.clothesid, function deleteAuthor(err){
            if(err) return next(err);

            res.redirect("/catalog/clothes");
          }
          
          
          )}
          );
        };
    

//Display clothes update form on GET
exports.clothes_update_get = (req, res, next) => {
    // const id = req.params.id;;

    // const clothes= Clothes.findById(id);
    // res.render('clothes_form', {title: 'Update Brand', update: true, clothes});

    async.parallel(
        {
            item: function (callback) {
                Clothes.findById(req.params.id).exec(callback);
            },
        },
        function (err, results){
            if (err){
                // res.render('error here1')
                return next(err);
            }

            if (results.item == null){
                // res.render('error here1')
                const err = new Error ("Clothes not found");
                err.status = 404;
                return next(err);
            }
            
            res.render('clothes_form', {
                title: 'Clothes detail', 
                clothes: results.item
            });

        }
    );

}


//Handle clothes update form on POST
exports.clothes_update_post = [
    body('clothes_name', 'Name cannot be empty')
        .trim()
        .isLength({min:1})
        .escape(),
    body('designer_name', 'Designer cannot be empty')
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
    body('clothes_type_name', 'Category cannot be empty')
        .trim()
        .isLength({min:1})
        .escape(),
    body('price', 'Price cannot be empty')
        .trim()
        .isLength({min:1})
        .escape(),
    (req, res, next) => {
        const errors = validationResult(req);

        const clothes = new Clothes({
            name: req.body.clothes_name,
            designer: req.body.designer_name,
            rating: req.body.rating,
            stock: req.body.stock,
            category: req.body.clothes_type_name,
            price: req.body.price,   
            _id: req.params.id,
        });

      
        if (!errors.isEmpty()){
            res.render('clothes_form', {
                title: 'Update clothes',
                clothes,
                errors: errors.array(),
                update: true,
                error: 'Incorrect password',
            });
        } else {
            Clothes.findByIdAndUpdate(
                req.params.id,
                clothes,
                {},
                function (err, theclothes) {
                  if (err){
                    return next(err);
                  } 
                  res.redirect(theclothes.url);
                }
              );
         }
    }
];

