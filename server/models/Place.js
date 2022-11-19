module.exports = (sequelize, DataTypes) => {
    const Place = sequelize.define("Place", {
      id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        unique: true,
        defaultValue: DataTypes.UUIDV4,
      },
      place: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
    });
    Place.associate = (models) => {
      Place.hasMany(models.Packages);
      Place.hasMany(models.Activities);
      Place.hasMany(models.Hotels);
      Place.hasMany(models.Transfers, {
        onDelete: "cascade"
      });
      Place.hasMany(models.Excursions, {
        onDelete: 'cascade'
      });
      
    };

    return Place;
  };