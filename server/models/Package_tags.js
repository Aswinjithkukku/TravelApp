
module.exports = (sequelize, DataTypes) => {
    const Package_tags = sequelize.define("Package_tags", {
        id: {
            type: DataTypes.UUID,
            allowNull: false,
            primaryKey: true,
            unique: true,
            defaultValue: DataTypes.UUIDV4,
        },

    })

    return Package_tags
}