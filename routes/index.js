var express = require('express');
var router = express.Router();
const usersRoute = require('./users.route');
router.route('users', usersRoute);

module.exports = router;
