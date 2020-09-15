module.exports = (sequelize, Sequelize) => {
  const Episode = sequelize.define("episode", {
    tconst: {
      type: Sequelize.STRING(500)
    },
    parentTconst: {
      type: Sequelize.STRING(500)
    },
    seasonNumber: {
      type: Sequelize.STRING(500)
    },
    episodeNumber: {
      type: Sequelize.STRING(500)
    }
  });

  return Episode;
};