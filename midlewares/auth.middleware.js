const { AsyncCatch } = require("../helpers/utils.helper");
const { Unauthorized } = require("../helpers/errors.helper");
const jwt = require("jsonwebtoken");

const authenticate = AsyncCatch(async (req, res, next) => {
    const authHeader = req.headers.authorization ? req.headers.authorization.split(' ') : null;
    if (authHeader && authHeader[1]){
        const token = authHeader[1];
        try {
            const decode = jwt.verify(token, process.env.JWT_SECRET_KEY);
            req.accountID = decode.accountID;
            req.role = decode.role;
            next();
        } catch (error) {
            throw new Unauthorized(error);
        }
    }else {
        throw new Unauthorized("Access denied. No token provided.");
    }
});
module.exports = authenticate;