const express = require('express');
const router = express.Router();

const {protect} = require('../Middleware/authMiddleware');
const { getGoals, setGoals, updateGoals, deleteGoals } = require('../controllers/goalControllers');

// @desc    GET goals
// @route   GET /api/goals
// @access  Private
router.route('/').get(protect, getGoals).post(protect,setGoals);

// @desc    UPDATE goals
// @route   PUT /api/goals/:id
// @access  Private
router.route('/:id').put(protect, updateGoals).delete(protect, deleteGoals);


module.exports = router


