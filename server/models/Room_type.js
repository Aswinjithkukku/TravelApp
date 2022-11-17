module.exports = (sequelize, DataTypes) => {
    const Room_type = sequelize.define("Room_type", {
    id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        unique: true,
        defaultValue: DataTypes.UUIDV4,
    },
    type: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    })
    Room_type.associate = (models) => {
        Room_type.hasMany(models.Hotel_prices, {
            onDelete: "cascade",
        });
    }

    return Room_type
  }