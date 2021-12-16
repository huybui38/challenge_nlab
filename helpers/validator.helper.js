const Joi = require("joi");
const _ = require("lodash");
const { BadRequest } = require("./errors.helper");

const validator = (fields, values) => {
    const input = [];
    for (let item in fields) input.push(item);
    const info = _.pick(values, input);
    const { error, value } = Joi.object(fields).validate(info);
    if (error) throw new BadRequest(error.message);
    return value;
};
const  orValidator = (fields, obj, values) => {
    const input = [];
    for (let item of fields) input.push(item);
    const info = _.pick(values, input);
    const { error, value } = Joi.object(obj).validate(info);
    if (error) throw new BadRequest(error.message);
    return value;
}
module.exports = { validator, orValidator }
