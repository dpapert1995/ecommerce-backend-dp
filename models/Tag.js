// Requires sequelize
const { Model, DataTypes } = require('sequelize');
// Requires connection to sequelize
const sequelize = require('../config/connection.js');
// Initializes Tag model
class Tag extends Model {}

Tag.init(
  {
    // Defines an id column
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
     // Defines tag_name column
     tag_name: {
      type: DataTypes.STRING,
      //allowNull: false
  }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag',
  }
);

module.exports = Tag;
