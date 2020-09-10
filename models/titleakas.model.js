
module.exports = (sequelize, Sequelize) => {
  const Titleakas = sequelize.define("title_akas", {
    titleId: {
      type: Sequelize.STRING
    },
    ordering: {
      type: Sequelize.INTEGER
    },
    title: {
      type: Sequelize.STRING
    },
    region: {
      type: Sequelize.STRING
    },
    language: {
      type: Sequelize.STRING
    },
    types: {
      type: Sequelize.STRING
    },
    runtimeMinutes: {
      type: Sequelize.STRING
    },
    attributes: {
      type: Sequelize.STRING
    },
    isOriginalTitle: {
      type: Sequelize.BOOLEAN
    }
  });

  return Titleakas;
};