//Do I need to install these libraries?
const express = require('express');
const router = express.Router();

// Require controller modules.
const clothes_controller = require('../controllers/clothesController');
const clothes_type_controller = require('../controllers/clothestypeController');
const designer_controller = require('../controllers/designerController');
///////////////////////////////////////////////////////////////////////////////////////////////////
/// Clothes ROUTES ///

// GET catalog home page.
router.get('/', clothes_controller.index);

// GET request for creating a Book. NOTE This must come before routes that display Book (uses id).
router.get('/clothes/create', clothes_controller.clothes_create_get);

// POST request for creating Book.
router.post('/clothes/create', clothes_controller.clothes_create_post);

// GET request to delete Book.
router.get('/clothes/:id/delete', clothes_controller.clothes_delete_get);

// POST request to delete Book.
router.post('/clothes/:id/delete', clothes_controller.clothes_delete_post);

// GET request to update Book.
router.get('/clothes/:id/update', clothes_controller.clothes_update_get);

// POST request to update Book.
router.post('/clothes/:id/update', clothes_controller.clothes_update_post);

// GET request for one Book.
router.get('/clothes/:id', clothes_controller.clothes_details);

// GET request for list of all Book items.
router.get('/clothes', clothes_controller.clothes_list);

///////////////////////////////////////////////////////////////////////////////////////////////////
/// Clothes Type ROUTES ///

// GET request for creating Author. NOTE This must come before route for id (i.e. display author).
router.get('/clothes_type/create', clothes_type_controller.clothes_type_create_get);

// POST request for creating Author.
router.post('/clothes_type/create', clothes_type_controller.clothes_type_create_post);

// GET request to delete Author.
router.get('/clothes_type/:id/delete', clothes_type_controller.clothes_type_delete_get);

// POST request to delete Author.
router.post('/clothes_type/:id/delete', clothes_type_controller.clothes_type_delete_post);

// GET request to update Author.
router.get('/clothes_type/:id/update', clothes_type_controller.clothes_type_update_get);

// POST request to update Author.
router.post('/clothes_type/:id/update', clothes_type_controller.clothes_type_update_post);

// GET request for one Author.
router.get('/clothes_type/:id', clothes_type_controller.clothes_type_detail);

// GET clothes_type for list of all Authors.
router.get('/clothes_type', clothes_type_controller.clothes_type_list);

///////////////////////////////////////////////////////////////////////////////////////////////////
/// Designer ROUTES ///

// GET request for creating a Genre. NOTE This must come before route that displays Genre (uses id).
router.get('/designer/create', designer_controller.designer_create_get);

//POST request for creating Genre.
router.post('/designer/create', designer_controller.designer_create_post);

// GET request to delete Genre.
router.get('/designer/:id/delete', designer_controller.designer_delete_get);

// POST request to delete Genre.
router.post('/designer/:id/delete', designer_controller.designer_delete_post);

// GET request to update Genre.
router.get('/designer/:id/update', designer_controller.designer_update_get);

// POST request to update Genre.
router.post('/designer/:id/update', designer_controller.designer_update_post);

// GET request for one Genre.
router.get('/designer/:id', designer_controller.designer_detail);

// GET request for list of all Genre.
router.get('/designer', designer_controller.designer_list);

module.exports = router;
