
module.exports = (sequelize, Sequelize) => {
  const Rating = sequelize.define("rating", {
    tconst: {
      type: Sequelize.STRING(500)
    },
    averageRating: {
      type: Sequelize.STRING(100)
    },
    numVotes: {
      type: Sequelize.STRING(1000)
    }
  });

  return Rating;
};