// Requires sequelize
const { Model, DataTypes } = require('sequelize');
// Requires connection to sequelize
const sequelize = require('../config/connection');
// Initializes ProductTag Model
class ProductTag extends Model {}

ProductTag.init(
  {
    // Defines product_id column
     // define an id column
     id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    product_id: {
    // 
    type: DataTypes.INTEGER,
    // Set to not null
    allowNull: false,
    // Set primary key
     // RAN INTO ERROR: Invalid Instance Definition, only one autoincrement field allowed.
    // primaryKey: true,
    // Turns on auto increment
     // RAN INTO ERROR: Invalid Instance Definition, only one autoincrement field allowed.
    // autoIncrement: true
    },
      // Defines tag_id column
  tag_id: {
    type: DataTypes.INTEGER,
    references: {
      model: "tag",
      key: "id",
     // allowNull: false
    }
  },
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
