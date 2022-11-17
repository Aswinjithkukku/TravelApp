
module.exports = (sequelize, DataTypes) => {
    const Option_features = sequelize.define("Option_features", {
        id: {
            type: DataTypes.UUID,
            allowNull: false,
            primaryKey: true,
            unique: true,
            defaultValue: DataTypes.UUIDV4,
        },
        amount: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },

    })
    Option_features.associate = (models) => {
        Option_features.hasMany(models.Option_feature_type, {
            onDelete: "cascade",
        })
      }

    return Option_features
}