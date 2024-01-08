// models/review.js
const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Review = sequelize.define('Review', {
    rating: {
      type: DataTypes.FLOAT,
    },
    comment: {
      type: DataTypes.TEXT,
    },
  });

  return Review;
};
