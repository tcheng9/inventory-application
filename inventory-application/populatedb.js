#! /usr/bin/env node
// Get arguments passed on command line
var userArgs = process.argv.slice(2);
/*
if (!userArgs[0].startsWith('mongodb')) {
    console.log('ERROR: You need to specify a valid mongodb URL as the first argument');
    return
}
*/
var async = require('async')

//Listing my models
var Clothes = require('./models/clothes')
var ClothesType = require('./models/clothes-type')
var Designer = require('./models/designer')

//Mongoose setup
var mongoose = require('mongoose');
const author = require('../../mdn-tutorials/express-localibrary-tutorial/models/author');
var mongoDB = userArgs[0];
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


//Arrays to store data
var clothes = []
var clothestype = []
var designer = []

//Functions for clothes
function clothesCreate(name, designer, rating, stock, category, price, cb){
  var clothesdetail = {
    name: name,
    designer: designer,
    rating: rating,
    stock: stock,
    category: category,
    price:price
  }

  var clothesInstance = new Clothes(clothesdetail);
  
  clothesInstance.save( function (err) {
    if (err){
      cb(err, null)
      return
    }

    console.log('new clothes' + clothesInstance);
    clothes.push(clothesInstance);
    cb(null, clothesInstance);
  });
}


//Function for clothes type
function clothestypeCreate(category, description,cb){
  var clothestypedetail = {
    category: category, 
    description: description
  }

  var clothestypeInstance = new ClothesType(clothestypedetail)

  clothestypeInstance.save(function (err){
    if (err) {
      cb(err, null);
      return;
    }

    console.log('New clothes type' + clothestypeInstance);
    clothestype.push(clothestypeInstance);
    cb(null, clothestypeInstance);
  })

}

//Function for designeer
// 
function designerCreate(name, founding_date, summary,cb){
  var designerdetail = {
    name: name,
    summary:summary,
    date: founding_date,
  }

  var designerInstance = new Designer(designerdetail)

  designerInstance.save(function (err) {
    if (err){
      cb(err, null);
      return;
    }

    console.log('New designer' + designerInstance);
    designer.push(designerInstance);
    cb(null, designerInstance);
  })

}

///////////////////////////////////////////////////////////////////
//Using the functions abovce to ACTUALLY CREATE test data

//Create template clothes
// function clothesCreate(name, designer, rating, stock, category, price){
function createClothes(cb){
  async.series([
    function(callback){
      clothesCreate("test1", "test1", 5, 5, "fashion", 50, callback);
    },
    function(callback){
      clothesCreate("test1", "test1", 5, 5, "fashion", 50, callback);
    },
    // function(callback){
    //   clothesCreate("test1", "test1", 5, 5, "fashion", 50, callback);
    // },
    // function(callback){
    //   clothesCreate("test1", "test1", 5, 5, "fashion", 50, callback);
    // },
    // function(callback){
    //   clothesCreate("test1", "test1", 5, 5, "fashion", 50, callback);
    // },
  ],
  
  cb)
}

//Create template clothes sections
// function clothestypeCreate(category, description){
function createClothesType(cb){
  async.series([
    function(callback){
      clothestypeCreate("Test2", "test of create clothes function", callback);
    },
    function(callback){
      clothestypeCreate("Test2", "test of create clothes function", callback);
    },
    // function(callback){

    // },
    // function(callback){

    // },
    // function(callback){

    // },
  ],
  
  cb)
}

//Create template designers
//function designerCreate(name, founding_date, summary){
function createDesigner(cb){
  async.series([
    function(callback){
      designerCreate("test designer", "01-01-01", "designer makes clothes", callback);
    },
    function(callback){
      designerCreate("test designer", "01-01-01", "designer makes clothes", callback);
    },
    // function(callback){

    // },
    // function(callback){

    // },
    // function(callback){

    // },
  ],
  
  cb)
}

  
/////////////////////////////////////////
//LAST STEP: PROCESSING THE CREATED INSTANCES

async.series([
  createClothes,
  createClothesType,
  createDesigner,
], 
  function (err, results){
    if (err){
      console.log('Final error' + err);
    } else {
      console.log('Final working log');
    }
    mongoose.connection.close();

  });

