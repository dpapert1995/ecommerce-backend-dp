// Requires sequelize
const { Model, DataTypes } = require('sequelize');
// Requires connection to sequelize
const sequelize = require('../config/connection.js');
// Initializes Category model
class Category extends Model {}

Category.init(
  {
   // Defines column for category name
   category_name: {
    type: DataTypes.STRING,
    allowNull: false
  }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;
