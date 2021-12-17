const { Unauthorized, BadRequest } = require("../helpers/errors.helper");
const { AsyncCatch , ROLES} = require("../helpers/utils.helper");
const {Account} = require('../models');
const accountValidator = require("../validators/account.validator");
const { validator } = require("../helpers/validator.helper");
const res = require("express/lib/response");
const updateInfo = AsyncCatch(async (req, res, next) => {
    if (req.accountID != req.params.accountID && req.role != ROLES.ADMINISTRATOR)  throw new Unauthorized("You don't have permission.");


    const params = validator(accountValidator(["fullName", "birthDay", "isFemale"]), req.body);
    let user = await Account.findByPk(req.params.accountID);
    if (!user) throw new BadRequest("User not found!");
    await user.update(params);
    res.send("Update user successfully!");
});
const getInfo = AsyncCatch(async (req, res, next) => {
  if (req.accountID != req.params.accountID && req.role != ROLES.ADMINISTRATOR)  throw new Unauthorized("You don't have permission.");
    let user = await Account.findByPk(req.params.accountID);
    if (!user) throw new BadRequest("User not found!");
    if (user){
        let result = {
            ...user.dataValues
        }
        delete result.password;
        res.send(result);
    }
});
module.exports = {updateInfo, getInfo};
