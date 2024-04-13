const express = require('express');
const router = express.Router();
const {register, userLogin, getMe} = require('../controllers/userControllers');

router.post('/', register);
router.post('/login', userLogin);
router.get('/me', getMe);

module.exports = router