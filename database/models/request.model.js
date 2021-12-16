
module.exports = (sequelize, DataTypes) => {
    const Request = sequelize.define('Request', {
        requestID: {
          autoIncrement: true,
          autoIncrementIdentity: true,
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true
        },
        senderID: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: 'Account',
            key: 'accountID'
          }
        },
        receiverID: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: 'Account',
            key: 'accountID'
          }
        },
        requestType: {
          type: DataTypes.INTEGER,
          allowNull: false
        },
        status: {
          type: DataTypes.INTEGER,
          allowNull: false
        },
        storeID: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: 'Store',
            key: 'storeID'
          }
        }
      }, {
        sequelize,
        tableName: 'Request',
        schema: 'public',
        timestamps: false,
        indexes: [
          {
            name: "Request_pkey",
            unique: true,
            fields: [
              { name: "requestID" },
            ]
          },
        ]
      });
      Request.associate = function (models) {
      // associations can be defined here
    }
    return Request
  }
  