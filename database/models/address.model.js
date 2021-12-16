
module.exports = (sequelize, DataTypes) => {
    const Address = sequelize.define('Address', {
        addressID: {
          autoIncrement: true,
          autoIncrementIdentity: true,
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true
        },
        addressNumber: {
          type: DataTypes.STRING(50),
          allowNull: false
        },
        street: {
          type: DataTypes.STRING(50),
          allowNull: false
        },
        ward: {
          type: DataTypes.STRING(50),
          allowNull: false
        },
        province: {
          type: DataTypes.STRING(50),
          allowNull: false
        }
      }, {
        sequelize,
        tableName: 'Address',
        schema: 'public',
        timestamps: false,
        indexes: [
          {
            name: "Address_pkey",
            unique: true,
            fields: [
              { name: "addressID" },
            ]
          },
        ]
      });
    Address.associate = function (models) {
      // associations can be defined here
    }
    return Address
  }
  