
module.exports = (sequelize, DataTypes) => {
    const Confirmation = sequelize.define('Confirmation', {
        confirmID: {
          autoIncrement: true,
          autoIncrementIdentity: true,
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true
        },
        accountID: {
          type: DataTypes.INTEGER,
          allowNull: false,
        
        },
        token: {
          type: DataTypes.STRING(255),
          allowNull: false
        },
        expiredTime: {
          type: DataTypes.DATE,
          allowNull: false
        },
        confirmType: {
          type: DataTypes.INTEGER,
          allowNull: false
        }
      }, {
        sequelize,
        tableName: 'Confirmation',
        schema: 'public',
        timestamps: false,
        indexes: [
          {
            name: "Confirmation_pkey",
            unique: true,
            fields: [
              { name: "confirmID" },
            ]
          },
        ]
      });
    Confirmation.associate = function (models) {
      // associations can be defined here
  Confirmation.belongsTo(models.Account, { as: "account", foreignKey: "accountID"});

    }
    return Confirmation
  }
  