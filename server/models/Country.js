module.exports = (sequelize, DataTypes) => {
  const Country = sequelize.define("Country", {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      unique: true,
      defaultValue: DataTypes.UUIDV4,
    },
    country: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
  });

  Country.associate = (models) => {
    Country.hasMany(models.Place, {
      onDelete: "cascade",
    });
    Country.hasMany(models.Visa, {
      onDelete: "cascade",
    });
    Country.hasMany(models.Airports, {
      onDelete: "cascade",
    });
  };

  return Country;
};
