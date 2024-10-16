const { DataTypes } = require("sequelize");
const db = require("../config/conection");

const User = db.define(
  "user_tables", // Nama model
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        notEmpty: false,
      },
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        len: [8, 100],
      },
    },
  },
  {
    tableName: "user_tables", // Nama tabel di database
    timestamps: false, // Otomatis menambahkan kolom createdAt dan updatedAt
  }
);

module.exports = User;
