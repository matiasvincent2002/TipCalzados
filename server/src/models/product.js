// models/product.js
const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Product = sequelize.define('Product', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    colorsAvailable: {
      type: DataTypes.ARRAY(DataTypes.STRING),
    },
    images: {
      type: DataTypes.ARRAY(DataTypes.STRING),
    },
    link: {
      type: DataTypes.STRING,
    },
    rating: {
      type: DataTypes.FLOAT,
    },
    numReviews: {
      type: DataTypes.INTEGER,
    },
    price: {
      type: DataTypes.INTEGER,
    },
    numInstallments: {
      type: DataTypes.INTEGER,
    },
    installmentAmount: {
      type: DataTypes.INTEGER,
    },
    freeShipping: {
      type: DataTypes.BOOLEAN,
    },
  });

  return Product;
};
