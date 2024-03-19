const asyncHandler = require('express-async-handler');

//@desc     GET goals
//@route    GET /api/goals
//@access   Private
const getGoals = asyncHandler(async (req, res) => {
    res.status(200).json({ message: "get goals" });
})

//@desc     GET goals
//@route    POST /api/goals
//@access   Private
const setGoals = asyncHandler(async (req, res) => {
    if(!req.body.text){
        res.status(400)
        throw new Error('Please add a text field');
    };

    res.status(200).json({ message: "set goals" });
})

//@desc     GET goals
//@route    PUT /api/goals
//@access   Private
const updateGoals = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `update goal ${req.params.id}` });
})

//@desc     GET goals
//@route    DELETE /api/goals
//@access   Private
const deleteGoals = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `delete goal ${req.params.id}`});
})

module.exports = {
    getGoals,
    setGoals,
    updateGoals,
    deleteGoals
}