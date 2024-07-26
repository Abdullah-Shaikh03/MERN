// @Desc    Goal controllers
// @route   GET /api/goals
// @access  Public
const getGoals = (async (req, res) => {
    res.json({message:"get goals", status: res.statusCode});
});

// @Desc    Add goal
// @route   POST /api/goals
// @access  Private
const addGoal = ( (req, res) => {
    if(!req.body.text){
        res.status(400);
        throw new error("Please enter a goal");
    }

    res.json({message:req.body, status: res.statusCode});
});


// @Desc    Update goal
// @route   PUT /api/goals/:id
// @access  Private
const updateGoal = (async (req, res) => {
    res.json({message:"update goal", status: res.statusCode});
});

// @Desc    Delete goal
// @route   DELETE /api/goals/:id
// @access  Private
const deleteGoal = (async (req, res) => {
    res.json({message:"delete goal", status: res.statusCode});
});


module.exports = { getGoals, addGoal, updateGoal, deleteGoal };