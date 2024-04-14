const express = require('express');
const router = express.Router();


const { getGoals, setGoals, updateGoals, deleteGoals } = require('../controllers/goalControllers');

// @desc    GET goals
// @route   GET /api/goals
// @access  Private
router.route('/').get(getGoals).post(setGoals);

// @desc    UPDATE goals
// @route   PUT /api/goals/:id
// @access  Private
router.route('/:id').put(updateGoals).delete(deleteGoals);


module.exports = router


