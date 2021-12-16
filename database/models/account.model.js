
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
      allowNull: true,
      references: {
        model: 'Address',
        key: 'addressID'
      }
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
    // associations can be defined here
  }
  return Account
}
