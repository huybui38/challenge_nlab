var express = require('express');
var router = express.Router();
const {getInfo, updateInfo} = require('../controllers/users.controller');
const auth = require('../midlewares/auth.middleware');

router.get('/:accountID', auth, getInfo);
router.put('/:accountID', auth, updateInfo);
module.exports = router;
