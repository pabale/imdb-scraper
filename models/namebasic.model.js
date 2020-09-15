
module.exports = (sequelize, Sequelize) => {
  const NameBasic = sequelize.define("name_basics", {
    nconst: {
      type: Sequelize.STRING(100),
      allowNull: false,
      unique: true
    },
    primaryName: {
      type: Sequelize.STRING(1000)
    },
    birthYear: {
      type: Sequelize.STRING(100)
    },
    deathYear: {
      type: Sequelize.STRING(100)
    },
    primaryProfession: {
      type: Sequelize.STRING(2000)
    },
    knownForTitles: {
      type: Sequelize.STRING(2000)
    }
  });

  return NameBasic;
};