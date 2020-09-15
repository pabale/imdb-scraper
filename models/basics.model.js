
module.exports = (sequelize, Sequelize) => {
  const Basics = sequelize.define("basics", {
    tconst: {
      type: Sequelize.STRING(1000)
    },
    titleType: {
      type: Sequelize.STRING(1000)
    },
    primaryTitle: {
      type: Sequelize.STRING(1000)
    },
    originalTitle: {
      type: Sequelize.STRING(1000)
    },
    isAdult: {
      type: Sequelize.STRING(1000)
    },
    startYear: {
      type: Sequelize.STRING(1000)
    },
    endYear: {
      type: Sequelize.STRING(1000)
    },
    runtimeMinutes: {
      type: Sequelize.STRING(1000)
    },
    genres: {
      type: Sequelize.STRING(1000)
    }
  });

  return Basics;
};