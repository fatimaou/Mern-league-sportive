const express = require('express');

const { createOrder, updateOrder, deleteOrder, getUserOrders, getOrders, getMonthlyIncome } = require('../controllers/order');
const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require('../middlewares/verifyToken');

const router = express.Router();

// POST => /api/orders 
router.post('/',  createOrder);

// PATCH => /api/orders/:id
router.patch('/:id', updateOrder);

// DELETE => /api/orders/:id
router.delete('/:id',  deleteOrder);

// GET => /api/orders/:userId
router.get('/:userId', getUserOrders);

// GET => /api/orders
router.get('/',  getOrders);

// GET => /api/orders/stats
router.get('/stats',  getMonthlyIncome);

module.exports = router;