
module.exports = (sequelize, DataTypes) => {
    const Hotels = sequelize.define("Hotels", {
    id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        unique: true,
        defaultValue: DataTypes.UUIDV4,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    phone: {
        type: DataTypes.BIGINT,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    address: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    hotel_type: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    })
      Hotels.associate = (models) => {
        Hotels.hasMany(models.Photos, {
            onDelete: "cascade",
        })
        Hotels.hasMany(models.Hotel_tags, {
            onDelete: "cascade",
        });
        Hotels.hasMany(models.Hotel_enquiries, {
            onDelete: "cascade",
        });
        Hotels.hasMany(models.Hotel_prices, {
            onDelete: "cascade",
        });
        Hotels.hasOne(models.HotelDetails, {
            onDelete: "cascade",
        });
      }


    return Hotels
  }