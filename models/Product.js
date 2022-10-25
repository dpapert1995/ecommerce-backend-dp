// Imports sequlize
const { Model, DataTypes } = require('sequelize');
// Imports connection to sequelize 
const sequelize = require('../config/connection');
// Initializes the product model
class Product extends Model {}

// Sets up rules for Product models
Product.init(
  {
    // Defines the id column
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
  },
    // Defines product name column
    product_name: {
      type: DataTypes.STRING,
      allowNull: false
  },
  // Defines price column
  price: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
      validate: {
        isDecimal: true
    }
  },
  // Defines stock column
  stock: {
      type: DataTypes.INTEGER,
      allowNull: false
      defaultValue: 10,
      validate: {
        isNumeric: true
      }
  },
  // Define category_id column
  category_id: {
      // Provides data type integer
      type: DataTypes.INTEGER,
      // Added references to category for model
      references: {
        model: "category",
        key: "id"
      // Set to not null
      allowNull: false,
      // Set primary key
      primaryKey: true,
      // Turns on auto increment
      autoIncrement: true
  }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
