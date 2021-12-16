const Joi = require("joi");
const { join } = require("lodash");

module.exports = function (fields = []) {
    const getSchema = (field) => {
        switch (field) {
            case "accountID":
                return Joi.number().required();
            case "password":
                return Joi.string().min(3).max(255).alphanum().required();
            case "fullName":
                return Joi.string()
                    .min(2)
                    .max(255)
                    .regex(
                        /^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựýỳỵỷỹ ]+$/
                    )
                    .trim();
            case "phoneNumber":
                return Joi.string().regex(/^[0-9\-\+]{9,12}$/).required();
            case "email":
                return Joi.string().email().required();
            case "birthDay":
                return Joi.date();
            case "avatar":
                return Joi.string().max(255);
            case "isFemale":
                return Joi.boolean();
            case "userSignIn":
                // return Joi.string().required();
                return Joi.alternatives().try(getSchema("email"), getSchema("phoneNumber")).required();
              
        }
    };

    const schema = {};

    for (let item of fields) {
        schema[`${item}`] = getSchema(item);
    }

    return schema;
};