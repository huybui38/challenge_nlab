
module.exports = (sequelize, DataTypes) => {
    const Store =sequelize.define('Store', {
        storeID: {
          autoIncrement: true,
          autoIncrementIdentity: true,
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true
        },
        ownerID: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: 'Account',
            key: 'accountID'
          }
        },
        name: {
          type: DataTypes.STRING(150),
          allowNull: false
        },
        logo: {
          type: DataTypes.STRING(200),
          allowNull: false
        },
        phoneNumber: {
          type: DataTypes.STRING(12),
          allowNull: false
        },
        email: {
          type: DataTypes.STRING(150),
          allowNull: true
        },
        addressID: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: 'Address',
            key: 'addressID'
          }
        }
      }, {
        sequelize,
        tableName: 'Store',
        schema: 'public',
        timestamps: false,
        indexes: [
          {
            name: "Store_pkey",
            unique: true,
            fields: [
              { name: "storeID" },
            ]
          },
        ]
      });
      Store.associate = function (models) {
      // associations can be defined here
    }
    return Store
}
  