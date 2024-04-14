const express = require('express');
const router = express.Router();
const {register, userLogin, getMe} = require('../controllers/userControllers');
const {protect} = require('../Middleware/authMiddleware');
router.post('/', register);
router.post('/login', userLogin);
router.get('/me', protect, getMe);

module.exports = router