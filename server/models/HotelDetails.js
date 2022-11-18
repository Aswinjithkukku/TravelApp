
module.exports = (sequelize, DataTypes) => {
    const HotelDetails = sequelize.define("HotelDetails", {
    id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        unique: true,
        defaultValue: DataTypes.UUIDV4,
    },
    fromDate: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    toDate: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    checkinTime: {
        type: DataTypes.TIME,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    checkoutTime: {
        type: DataTypes.TIME,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    oneBr: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    twoBr: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    threeBr: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    sixBr: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    eightBr: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    basicOneBr: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    basicTwoBr: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    basicThreeBr: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    basicSixBr: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    basicEightBr: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    })
    //   HotelDetails.associate = (models) => {
    //     HotelDetails.hasMany(models.Photos, {
    //         onDelete: "cascade",
    //     })
    //   }


    return HotelDetails
  }