var express = require('express');
var router = express.Router();
const {getInfo, updateInfo} = require('../controllers/users.controller');
/* GET users listing. */
router.get('/:id', getInfo);
router.put('/:id', updateInfo);

module.exports = router;
