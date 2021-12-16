
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
      Store.belongsTo(models.Account, { as: "owner", foreignKey: "ownerID"});
      Store.belongsTo(models.Address, { as: "address", foreignKey: "addressID"});
      Store.hasMany(models.Contract, { as: "Contracts", foreignKey: "storeID"});
      Store.hasMany(models.Request, { as: "Requests", foreignKey: "storeID"});
    
    }
    return Store
}
  