const express = require("express");
const router = express.Router();
const {
  getGoals,
  addGoal,
  updateGoal,
  deleteGoal,
} = require("../controllers/goalControllers");

const {protect} = require("../middleware/authMiddleware");

router.route("/").get(protect, getGoals).post(protect, addGoal);
router.route("/:id").delete(protect, deleteGoal).put(protect, updateGoal);

module.exports = router;
