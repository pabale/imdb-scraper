
module.exports = (sequelize, Sequelize) => {
  const Titleprincipal = sequelize.define("title_principal", {
    tconst: {
      type: Sequelize.STRING(1000)
    },
    ordering: {
      type: Sequelize.STRING(1000)
    },
    nconst: {
      type: Sequelize.STRING(1000)
    },
    category: {
      type: Sequelize.STRING(1000)
    },
    job: {
      type: Sequelize.STRING(1000)
    },
    characters: {
      type: Sequelize.STRING(1000)
    }
  });

  return Titleprincipal;
};