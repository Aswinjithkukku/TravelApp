module.exports = (sequelize, DataTypes) => {
    const Activities = sequelize.define("Activities", {
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
    price: {
        type: DataTypes.BIGINT,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    offer_price: {
        type: DataTypes.BIGINT,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    })

    Activities.associate = (models) => {
        Activities.hasMany(models.Cart, {
            onDelete: "cascade",
        })
        Activities.hasMany(models.Service_descriptions, {
            onDelete: "cascade",
        })
        Activities.hasMany(models.Booking_summary, {
            onDelete: "cascade",
        })
        Activities.hasMany(models.Videos, {
            onDelete: "cascade",
        })
        Activities.hasMany(models.Photos, {
            onDelete: "cascade",
        })
        Activities.hasMany(models.Options, {
            onDelete: "cascade",
        })
      }

    return Activities
  }