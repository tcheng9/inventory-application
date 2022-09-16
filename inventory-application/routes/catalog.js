//Do I need to install these libraries?
const express = require('express');
const router = express.Router();

// Require controller modules.
const clothes_controller = require('../controllers/clothesController');
const clothes_type_controller = require('../controllers/clothestypeController');
const designer_controller = require('../controllers/designerController');

/// Clothes ROUTES ///

// GET catalog home page.
router.get('/', clothes_controller.index);

// GET request for creating a Book. NOTE This must come before routes that display Book (uses id).
router.get('/clothes/create', clothes_controller.book_create_get);

// POST request for creating Book.
router.post('/clothes/create', clothes_controller.book_create_post);

// GET request to delete Book.
router.get('/clothes/:id/delete', clothes_controller.book_delete_get);

// POST request to delete Book.
router.post('/clothes/:id/delete', clothes_controller.book_delete_post);

// GET request to update Book.
router.get('/clothes/:id/update', clothes_controller.book_update_get);

// POST request to update Book.
router.post('/clothes/:id/update', clothes_controller.book_update_post);

// GET request for one Book.
router.get('/clothes/:id', clothes_controller.book_detail);

// GET request for list of all Book items.
router.get('/clothes', clothes_controller.book_list);

/// Clothes Type ROUTES ///

// GET request for creating Author. NOTE This must come before route for id (i.e. display author).
router.get('/clothes/create', author_controller.author_create_get);

// POST request for creating Author.
router.post('/author/create', author_controller.author_create_post);

// GET request to delete Author.
router.get('/author/:id/delete', author_controller.author_delete_get);

// POST request to delete Author.
router.post('/author/:id/delete', author_controller.author_delete_post);

// GET request to update Author.
router.get('/author/:id/update', author_controller.author_update_get);

// POST request to update Author.
router.post('/author/:id/update', author_controller.author_update_post);

// GET request for one Author.
router.get('/author/:id', author_controller.author_detail);

// GET request for list of all Authors.
router.get('/authors', author_controller.author_list);

/// GENRE ROUTES ///

// GET request for creating a Genre. NOTE This must come before route that displays Genre (uses id).
router.get('/genre/create', genre_controller.genre_create_get);

//POST request for creating Genre.
router.post('/genre/create', genre_controller.genre_create_post);

// GET request to delete Genre.
router.get('/genre/:id/delete', genre_controller.genre_delete_get);

// POST request to delete Genre.
router.post('/genre/:id/delete', genre_controller.genre_delete_post);

// GET request to update Genre.
router.get('/genre/:id/update', genre_controller.genre_update_get);

// POST request to update Genre.
router.post('/genre/:id/update', genre_controller.genre_update_post);

// GET request for one Genre.
router.get('/genre/:id', genre_controller.genre_detail);

// GET request for list of all Genre.
router.get('/genres', genre_controller.genre_list);

/// BOOKINSTANCE ROUTES ///

// GET request for creating a BookInstance. NOTE This must come before route that displays BookInstance (uses id).
router.get('/bookinstance/create', book_instance_controller.bookinstance_create_get);

// POST request for creating BookInstance.
router.post('/bookinstance/create', book_instance_controller.bookinstance_create_post);

// GET request to delete BookInstance.
router.get('/bookinstance/:id/delete', book_instance_controller.bookinstance_delete_get);

// POST request to delete BookInstance.
router.post('/bookinstance/:id/delete', book_instance_controller.bookinstance_delete_post);

// GET request to update BookInstance.
router.get('/bookinstance/:id/update', book_instance_controller.bookinstance_update_get);

// POST request to update BookInstance.
router.post('/bookinstance/:id/update', book_instance_controller.bookinstance_update_post);

// GET request for one BookInstance.
router.get('/bookinstance/:id', book_instance_controller.bookinstance_detail);

// GET request for list of all BookInstance.
router.get('/bookinstances', book_instance_controller.bookinstance_list);

module.exports = router;