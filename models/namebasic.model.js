
module.exports = (sequelize, Sequelize) => {
  const NameBasic = sequelize.define("name_basics", {
    nconst: {
      type: Sequelize.STRING
    },
    primaryName: {
      type: Sequelize.STRING
    },
    birthYear: {
      type: Sequelize.STRING
    },
    deathYear: {
      type: Sequelize.STRING
    },
    primaryProfession: {
      type: Sequelize.STRING
    },
    knownForTitles: {
      type: Sequelize.STRING
    }
  });

  return NameBasic;
};