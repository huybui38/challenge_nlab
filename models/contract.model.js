
module.exports = (sequelize, DataTypes) => {
    const Contract = sequelize.define('Contract', {
        contractID: {
          autoIncrement: true,
          autoIncrementIdentity: true,
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true
        },
        storeID: {
          type: DataTypes.INTEGER,
          allowNull: false,
     
        },
        employeeID: {
          type: DataTypes.INTEGER,
          allowNull: false
        },
        isWorking: {
          type: DataTypes.BOOLEAN,
          allowNull: false
        }
      }, {
        sequelize,
        tableName: 'Contract',
        schema: 'public',
        timestamps: false,
        indexes: [
          {
            name: "Contract_pkey",
            unique: true,
            fields: [
              { name: "contractID" },
            ]
          },
        ]
      });
      Contract.associate = function (models) {
      // associations can be defined here
        Contract.belongsTo(models.Store, { as: "store", foreignKey: "storeID"});

    }
    return Contract
  }
  