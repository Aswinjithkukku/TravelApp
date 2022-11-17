
module.exports = (sequelize, DataTypes) => {
    const Service_Tags = sequelize.define("Service_Tags", {
        id: {
            type: DataTypes.UUID,
            allowNull: false,
            primaryKey: true,
            unique: true,
            defaultValue: DataTypes.UUIDV4,
        },
        caption: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        }

    })
    Service_Tags.associate = (models) => {
        Service_Tags.hasMany(models.Package_tags)
        Service_Tags.hasMany(models.Hotel_tags)
        Service_Tags.hasMany(models.Activity_tags)
      }
    return Service_Tags
}