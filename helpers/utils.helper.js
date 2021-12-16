const jwt = require("jsonwebtoken");
const { DefaultError, STATUS_CODE } = require("./errors.helper");
const ROLES = {
    FREELANCER : 0,
    STORE : 1,
    ADMINISTRATOR : 2
}
const AsyncCatch = (fn) => {
    return (req, res, next) => fn(req, res, next).catch(next);
};
const getAccountToken = function ({accountID, specialID}){
    let role = specialID ? ROLES.STORE : ROLES.FREELANCER; 
    return jwt.sign({ accountID, role }, process.env.JWT_SECRET_KEY);
}
const handleError = (err, req, res, next) => {
    if (err instanceof DefaultError) {
        return res.status(err.getCode()).json({
            message: err.message,
        });
    }
    if (process.env.NODE_ENV !== "production")
        console.log(err);
    res.status(STATUS_CODE.INTERNAL_SERVER_ERROR).json({
        message: `Something wrongs !!`,
    });
};
module.exports = { AsyncCatch, getAccountToken, handleError, ROLES}