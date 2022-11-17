
module.exports = (sequelize, DataTypes) => {
    const Options = sequelize.define("Options", {
        id: {
            type: DataTypes.UUID,
            allowNull: false,
            primaryKey: true,
            unique: true,
            defaultValue: DataTypes.UUIDV4,
        },
        option: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },

    })
    Options.associate = (models) => {
        Options.hasMany(models.Option_features, {
            onDelete: "cascade",
        })
      }

    return Options
}