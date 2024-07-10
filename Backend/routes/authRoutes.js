const express = require('express');
const { register, login, checkAuth , logout} = require('../controllers/authController');
const { authenticateToken} = require('../helpers/authenticateToken')

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/check-auth',  authenticateToken, checkAuth)
router.post('/logout', logout);

module.exports = router;
