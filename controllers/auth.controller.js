const { Op } = require("sequelize");
const { compare } = require("../helpers/bcrypt.helpler");
const { AsyncCatch, getAccountToken, ROLES } = require("../helpers/utils.helper");
const { validator, orValidator } = require("../helpers/validator.helper");
const { Unauthorized } = require("../helpers/errors.helper");
const { Account } = require("../models");
const accountValidator = require("../validators/account.validator");
const signIn = AsyncCatch(async (req, res, next) => {
  const { userSignIn } = orValidator(
    ["userSignIn"],
    accountValidator(["userSignIn"]),
    req.body
  );
  const { password } = validator(accountValidator(["password"]), req.body);
  const user = await Account.findOne({
    where: {
        [Op.or]:{
            email: userSignIn,
            phoneNumber: userSignIn
        }
    }
  });
  if (!user) throw new Unauthorized("Email or phone number is not correct.");
  let isPasswordCorrect = await compare(password, user.password);
  if (!isPasswordCorrect) throw new Unauthorized("Password is not correct.");
  let token = getAccountToken(user);
  return res.send({token});
});

module.exports.signIn = signIn;
