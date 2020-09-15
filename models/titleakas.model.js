
module.exports = (sequelize, Sequelize) => {
  const Titleakas = sequelize.define("title_akas", {
    titleId: {
      type: Sequelize.STRING(100),
      allowNull: false,
      unique: true
    },
    ordering: {
      type: Sequelize.STRING(1000)
    },
    title: {
      type: Sequelize.STRING(1000)
    },
    region: {
      type: Sequelize.STRING(1000)
    },
    language: {
      type: Sequelize.STRING(1000)
    },
    types: {
      type: Sequelize.STRING(1000)
    },
    runtimeMinutes: {
      type: Sequelize.STRING(1000)
    },
    attributes: {
      type: Sequelize.STRING(1000)
    },
    isOriginalTitle: {
      type: Sequelize.STRING(1000)
    }
  });

  return Titleakas;
};