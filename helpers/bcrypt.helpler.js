const bcrypt  = require('bcrypt');
async function createHashPassword(password){
    let salt = await bcrypt.genSalt(10);
    return bcrypt.hash(password, salt);
}
async function compare(plain, hash){
    return await bcrypt.compare(plain, hash);
}
module.exports = {createHashPassword, compare}