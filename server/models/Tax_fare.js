module.exports = (sequelize, DataTypes) => {
    const Tax_fare = sequelize.define("Tax_fare", {
    id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        unique: true,
        defaultValue: DataTypes.UUIDV4,
    },
    fuel_surcharge: {
        type: DataTypes.BIGINT,
        defaultValue : 0
    },
    user_dev_fee: {
        type: DataTypes.BIGINT,
        defaultValue: 0
    },
    airline_misc: {
        type: DataTypes.BIGINT,
        defaultValue: 0
    },

    })
    Tax_fare.associate = (models) => {
        Tax_fare.hasMany(models.Flight_price, {
          onDelete: "cascade",
        });
      };

    return Tax_fare
  }