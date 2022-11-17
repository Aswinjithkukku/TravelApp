
module.exports = (sequelize, DataTypes) => {
    const Activity_tags = sequelize.define("Activity_tags", {
        id: {
            type: DataTypes.UUID,
            allowNull: false,
            primaryKey: true,
            unique: true,
            defaultValue: DataTypes.UUIDV4,
        }
    })
    Activity_tags.associate = (models) => {
        Activity_tags.hasMany(models.Service_Tags)
      }
    return Activity_tags
}