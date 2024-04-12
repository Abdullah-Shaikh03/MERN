const express = require('express');
const router = express.Router();
const {registerUser, loginUser, getMe, deleteUser} = require('../controllers/userControllers');


router.post('/', registerUser)
router.post('/login', loginUser)
router.get('/me', getMe)
router.delete('/delete', deleteUser)


module.exports = router