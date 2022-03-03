const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class OS extends Model {}

OS.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    OS_type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "OS",
  }
);

module.exports = OS;