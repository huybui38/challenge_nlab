
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
          references: {
            model: 'Store',
            key: 'storeID'
          }
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
    }
    return Contract
  }
  