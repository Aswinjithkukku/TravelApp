
module.exports = (sequelize, DataTypes) => {
    const Hotel_tags = sequelize.define("Hotel_tags", {
        id: {
            type: DataTypes.UUID,
            allowNull: false,
            primaryKey: true,
            unique: true,
            defaultValue: DataTypes.UUIDV4,
        },
    })
    Hotel_tags.associate = (models) => {
        Hotel_tags.hasMany(models.Service_Tags, {
            onDelete: "cascade",
        })
      }

    return Hotel_tags
}