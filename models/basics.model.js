
module.exports = (sequelize, Sequelize) => {
  const Basics = sequelize.define("basics", {
    tconst: {
      type: Sequelize.STRING
    },
    titleType: {
      type: Sequelize.STRING
    },
    primaryTitle: {
      type: Sequelize.STRING
    },
    originalTitle: {
      type: Sequelize.STRING
    },
    isAdult: {
      type: Sequelize.BOOLEAN
    },
    startYear: {
      type: Sequelize.STRING
    },
    endYear: {
      type: Sequelize.STRING
    },
    runtimeMinutes: {
      type: Sequelize.STRING
    },
    genres: {
      type: Sequelize.STRING
    }
  });

  return Basics;
};