module.exports = (sequelize, DataTypes) => {
    const Addons = sequelize.define("Addons", {
    id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        unique: true,
        defaultValue: DataTypes.UUIDV4,
    },
    baggage: {
        type: DataTypes.TEXT,
        defaultValue: "none"
    },
    meals: {
        type: DataTypes.TEXT,
        defaultValue: "none"
    },
    baggage_price: {
        type: DataTypes.BIGINT,
        defaultValue: 0
    },
    meals_price: {
        type: DataTypes.BIGINT,
        defaultValue: 0
    },
    amount: {
        type: DataTypes.BIGINT,
        defaultValue: 0
    },
})
Addons.associate = (models) => {
    Addons.hasMany(models.Flight_price, {
      onDelete: "cascade",
    });
  };

    return Addons
  }