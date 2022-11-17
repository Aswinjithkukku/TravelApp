module.exports = (sequelize, DataTypes) => {
    const Flight_price = sequelize.define("Flight_price", {
    id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        unique: true,
        defaultValue: DataTypes.UUIDV4,
    },
    total_amount: {
        type: DataTypes.BIGINT,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    original_amount: {
        type: DataTypes.BIGINT,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    adult_amount: {
        type: DataTypes.BIGINT,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    children_amount: {
        type: DataTypes.BIGINT,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    infant_amount: {
        type: DataTypes.BIGINT,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    remainingseat: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },

    })
    Flight_price.associate = (models) => {
        Flight_price.hasMany(models.Cart, {
            onDelete: "cascade",
        });
        Flight_price.hasMany(models.Booking_summary, {
            onDelete: "cascade",
        });
      }

    return Flight_price
  }