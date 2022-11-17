
module.exports = (sequelize, DataTypes) => {
    const Offers = sequelize.define("Offers", {
        id: {
            type: DataTypes.UUID,
            allowNull: false,
            primaryKey: true,
            unique: true,
            defaultValue: DataTypes.UUIDV4,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        router_link: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },

    })
    Offers.associate = (models) => {
        Offers.hasMany(models.Photos, {
            onDelete: "cascade",
        })
      }

    return Offers
}