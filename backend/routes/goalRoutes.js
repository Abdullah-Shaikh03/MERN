const express = require("express");
const router = express.Router();

const Goal = require("../controllers/goalControllers");


router.route('/').get(Goal.getGoals).post(Goal.addGoal);

router.route("/:id").delete(Goal.deleteGoal).put(Goal.updateGoal);;

module.exports = router;
