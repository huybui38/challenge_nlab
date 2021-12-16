const { Unauthorized } = require("../helpers/errors.helper");
const { AsyncCatch , ROLES} = require("../helpers/utils.helper");
const {Account} = require('../models');
const accountValidator = require("../validators/account.validator");
const updateInfo = AsyncCatch(async () => {

});
const getInfo = AsyncCatch(async (req, res, next) => {
  if (req.accountID != req.params.accountID && req.role != ROLES.ADMINISTRATOR)  throw new Unauthorized("You don't have permission.");
    let user = await Account.findByPk(req.params.accountID);
    if (user){
        res.send(user);
    }
});
module.exports = {updateInfo, getInfo};
