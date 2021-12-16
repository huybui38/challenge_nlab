
module.exports = (sequelize, DataTypes) => {
    const Account = sequelize.define('Account', {
      accountID: {
        autoIncrement: true,
        autoIncrementIdentity: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      phoneNumber: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      fullName: {
        type: DataTypes.STRING(80),
        allowNull: false
      },
      email: {
        type: DataTypes.STRING(150),
        allowNull: false
      },
      emailConfimed: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      password: {
        type: DataTypes.STRING(80),
        allowNull: false
      },
      birthDay: {
        type: DataTypes.DATEONLY,
        allowNull: true
      },
      avatar: {
        type: DataTypes.STRING(80),
        allowNull: true
      },
      isFemale: {
        type: DataTypes.BOOLEAN,
        allowNull: true
      },
      specialID: {
        type: DataTypes.STRING(15),
        allowNull: true
      },
      addressID: {
        type: DataTypes.INTEGER,
        allowNull: true
      }
    }, {
      sequelize,
      tableName: 'Account',
      schema: 'public',
      timestamps: false,
      indexes: [
        {
          name: "Account_pkey",
          unique: true,
          fields: [
            { name: "accountID" },
          ]
        },
      ]
    });
    Account.associate = function (models) {
      Account.hasMany(models.Request, { as: "Requests", foreignKey: "receiverID"});
    Account.hasMany(models.Request, { as: "sender_Requests", foreignKey: "senderID"});
    Account.hasMany(models.Store, { as: "Stores", foreignKey: "ownerID"});
    Account.belongsTo(models.Address, { as: "address", foreignKey: "addressID"});
    Account.hasMany(models.Confirmation, { as: "Confirmations", foreignKey: "accountID"});
    // associations can be defined here
    }
    return Account
  }
  