module.exports = (sequelize, DataTypes) => {
  const Packages = sequelize.define("Packages", {
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
        notEmpty: true,
      },
    },
    place: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
  });
  Packages.associate = (models) => {
    Packages.hasMany(models.Videos, {
      onDelete: "cascade",
    });
    Packages.hasOne(models.Package_descriptions, {
      onDelete: "cascade",
    });
    Packages.hasOne(models.Package_itinerary, {
      onDelete: "cascade",
    });
    Packages.hasMany(models.Package_enquiries, {
      onDelete: "cascade",
    });
    Packages.hasMany(models.Photos, {
      onDelete: "cascade",
    });
    Packages.hasMany(models.Package_tags);
  };
  return Packages;
};
