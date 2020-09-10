
module.exports = (sequelize, Sequelize) => {
  const Titleprincipal = sequelize.define("title_principal", {
    tconst: {
      type: Sequelize.STRING
    },
    ordering: {
      type: Sequelize.INTEGER
    },
    nconst: {
      type: Sequelize.STRING
    },
    category: {
      type: Sequelize.STRING
    },
    job: {
      type: Sequelize.STRING
    },
    characters: {
      type: Sequelize.STRING
    }
  });

  return Titleprincipal;
};