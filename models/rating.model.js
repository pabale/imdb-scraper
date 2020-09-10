
module.exports = (sequelize, Sequelize) => {
  const Rating = sequelize.define("rating", {
    tconst: {
      type: Sequelize.STRING
    },
    averageRating: {
      type: Sequelize.STRING
    },
    numVotes: {
      type: Sequelize.STRING
    }
  });

  return Rating;
};