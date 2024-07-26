const asyncHandler = require("express-async-handler");
const Goal = require("../models/goalModel");

// @Desc    Goal controllers
// @route   GET /api/goals
// @access  Public
const getGoals = asyncHandler(async (req, res) => {
  const goals = await Goal.find({});
  res.json({ message: goals, status: res.statusCode });
});

// @Desc    Add goal
// @route   POST /api/goals
// @access  Private
const addGoal = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please enter a goal");
  }

  const goal = await Goal.create({ text: req.body.text });
  
  res.json({ message: goal, status: res.statusCode });
});

// @Desc    Update goal
// @route   PUT /api/goals/:id
// @access  Private
const updateGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);
  if (!goal) {
    res.status(404);
    throw new Error("Goal not found");
  }

  const updatedGoal = await Goal.findByIdAndUpdate(
    req.params.id,
    { text: req.body.text },
    { new: true, runValidators: true }
  )

  res.json({ message: updatedGoal, status: res.statusCode });
});

// @Desc    Delete goal
// @route   DELETE /api/goals/:id
// @access  Private
const deleteGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);
  if (!goal) {
    res.status(404);
    throw new Error("Goal not found");
  }

  await goal.deleteOne({_id: req.params.id});
  res.json({ message: `Goal removed: ${req.params.id}`, status: res.statusCode });
});

module.exports = { getGoals, addGoal, updateGoal, deleteGoal };
