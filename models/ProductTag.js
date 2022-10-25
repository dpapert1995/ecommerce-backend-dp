// Requires and extensions
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
class ProductTag extends Model {}

ProductTag.init(
    // Defines product_id column
    product_id: {
    // 
    type: DataTypes.INTEGER,
    // Set to not null
    allowNull: false,
    // Set primary key
    primaryKey: true,
    // Turns on auto increment
    autoIncrement: true
    },
      // Defines tag_id column
  tag_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);
module.exports = ProductTag;
