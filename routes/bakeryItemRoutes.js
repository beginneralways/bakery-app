const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware'); // Import the authentication middleware

// Import the bakery item controller
const bakeryItemController = require('./controllers/bakeryItemController');

// Define the routes
router.post('/', bakeryItemController.createBakeryItem);
router.put('/:id', bakeryItemController.updateBakeryItem);
router.get('/:id', bakeryItemController.getBakeryItemById);
router.get('/', bakeryItemController.getAllBakeryItems);

// Protected route: Only logged-in users can place an order
router.post('/place-order', authMiddleware, bakeryItemController.placeOrder);

module.exports = router;
