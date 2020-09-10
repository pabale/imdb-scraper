module.exports = (sequelize, Sequelize) => {
  const Episode = sequelize.define("episode", {
    tconst: {
      type: Sequelize.STRING
    },
    parentTconst: {
      type: Sequelize.STRING
    },
    seasonNumber: {
      type: Sequelize.INTEGER
    },
    episodeNumber: {
      type: Sequelize.INTEGER
    }
  });

  return Episode;
};