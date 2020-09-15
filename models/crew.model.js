module.exports = (sequelize, Sequelize) => {
  const Crew = sequelize.define("crew", {
    tconst: {
      type: Sequelize.STRING(1000)
    },
    directors: {
      type: Sequelize.TEXT
    },
    writers: {
      type: Sequelize.TEXT
    }
  });

  return Crew;
};
