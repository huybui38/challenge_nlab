var express = require('express');
var router = express.Router();
const {signIn} = require('../controllers/auth.controller'); 
router.post('sign-in', signIn);

module.exports = router;
