
module.exports = (sequelize, DataTypes) => {
    const Option_feature_type = sequelize.define("Option_feature_type", {
        id: {
            type: DataTypes.UUID,
            allowNull: false,
            primaryKey: true,
            unique: true,
            defaultValue: DataTypes.UUIDV4,
        },
        option_feature_type: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },

    })

    return Option_feature_type
}