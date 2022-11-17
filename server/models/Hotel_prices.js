module.exports = (sequelize, DataTypes) => {
    const Hotel_prices = sequelize.define("Hotel_prices", {
    id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        unique: true,
        defaultValue: DataTypes.UUIDV4,
    },
    amount: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    option: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    peoples: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    }
    })
      Hotel_prices.associate = (models) => {
        Hotel_prices.hasMany(models.Booking_summary, {
            onDelete: "cascade",
        });
        Hotel_prices.hasMany(models.Cart, {
            onDelete: "cascade",
        });
      }


    return Hotel_prices
  }