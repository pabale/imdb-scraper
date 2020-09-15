module.exports = (sequelize, Sequelize) => {
  const Crew = sequelize.define("crew", {
    tconst: {
      type: Sequelize.STRING(100),
      allowNull: false,
      unique: true
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
