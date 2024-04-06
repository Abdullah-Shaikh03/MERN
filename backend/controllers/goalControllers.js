const asyncHandler = require('express-async-handler');

const Goal = require('../models/goalModel');
//@desc     GET goals
//@route    GET /api/goals
//@access   Private
const getGoals = asyncHandler(async (req, res) => {
    const goals = await Goal.find();
    res.status(200).json(goals);
})

//@desc     GET goals
//@route    POST /api/goals
//@access   Private
const setGoals = asyncHandler(async (req, res) => {
    if(!req.body.text){
        res.status(400)
        throw new Error('Please add a text field');
    };

    const goal = await Goal.create({
        text: req.body.text
    })

    res.status(200).json(goal);
})

//@desc     GET goals
//@route    PUT /api/goals
//@access   Private
const updateGoals = asyncHandler(async (req, res) => {
    const goal = await Goal.findById(req.params.id);

    if (!goal) {
        res.status(400)
        throw new Error('Goal not found');
    } else {
        // Declare updatedGoal outside of the else block
        let updatedGoal;

        updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        });

        // Now you can access updatedGoal outside of the else block
        res.status(200).json(updatedGoal);
    }
});

//@desc     GET goals
//@route    DELETE /api/goals
//@access   Private
const deleteGoals = asyncHandler(async (req, res) => {

    // const goal = await Goal.findById(req.params.id);
    // if(!goal){
    //     res.status(400)
    //     throw new Error('Goal not found');
    // }

    // await goal.remove();


    // res.status(200).json({id: req.params.id});
    const goal = await Goal.findById(req.params.id);

    if (!goal) {
        res.status(400)
        throw new Error('Goal not found');
    }

    await goal.deleteOne({ _id: req.params.id });
    res.status(200).json({ id: req.params.id });
})

module.exports = {
    getGoals,
    setGoals,
    updateGoals,
    deleteGoals
}