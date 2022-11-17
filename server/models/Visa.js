module.exports = (sequelize, DataTypes) => {
    const Visa = sequelize.define("Visa", {
    id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        unique: true,
        defaultValue: DataTypes.UUIDV4,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    })
    Visa.associate = (models) => {
        Visa.hasMany(models.Visa_price, {
            onDelete: "cascade",
        })
      }


    return Visa
  }