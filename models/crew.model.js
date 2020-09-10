module.exports = (sequelize, Sequelize) => {
  const Crew = sequelize.define("crew", {
    tconst: {
      type: Sequelize.STRING
    },
    directors: {
      type: Sequelize.STRING
    },
    writers: {
      type: Sequelize.STRING
    }
  });

  return Crew;
};
