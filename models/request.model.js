
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
        
        },
        receiverID: {
          type: DataTypes.INTEGER,
          allowNull: false,
      
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
  Request.belongsTo(models.Account, { as: "receiver", foreignKey: "receiverID"});
  Request.belongsTo(models.Account, { as: "sender", foreignKey: "senderID"});
  Request.belongsTo(models.Store, { as: "store", foreignKey: "storeID"});

      // associations can be defined here
    }
    return Request
  }
  