module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define("Users", {
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
  email: {
      type: DataTypes.STRING,
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
  password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
          notEmpty: true
      }
  },
  nationality: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
          notEmpty: true
      }
  },
  role: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
          notEmpty: true
      }
  },
  })

  Users.associate = (models) => {
    Users.hasOne(models.Feedbacks, {
        onDelete: "cascade",
    })
    Users.hasMany(models.Package_enquiries, {
        onDelete: "cascade",
    })
    Users.hasMany(models.Cart, {
        onDelete: "cascade",
    })
    Users.hasMany(models.Hotel_enquiries, {
        onDelete: "cascade",
    })
    Users.hasOne(models.Reviews, {
        onDelete: "cascade",
    })
}
  return Users
}