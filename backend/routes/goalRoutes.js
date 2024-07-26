const express = require("express");
const router = express.Router();
const {
  getGoals,
  addGoal,
  updateGoal,
  deleteGoal,
} = require("../controllers/goalControllers");

router.route("/").get(getGoals).post(addGoal);
router.route("/:id").delete(deleteGoal).put(updateGoal);

module.exports = router;
