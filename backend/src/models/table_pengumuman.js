const { DataTypes } = require("sequelize");
const db = require("../config/conection");

const Pengumuman = db.define(
  "table_pengumuman",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    judul: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    tanggal: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    gambar: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    status: {
      type: DataTypes.STRING,
      defaultValue: "0",
    },
  },
  {
    tableName: "table_pengumuman",
    timestamps: false,
  }
);

module.exports = Pengumuman;
