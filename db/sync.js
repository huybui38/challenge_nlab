const { assertDatabaseConnectionOk } = require("../helpers/database.helper");
const { sequelize } = require("../models");

(async () => {
    await assertDatabaseConnectionOk();
    await sequelize.sync({ force: false });
})();