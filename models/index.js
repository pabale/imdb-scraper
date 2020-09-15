const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: 0,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;


db.crew = require("./crew.model.js")(sequelize, Sequelize);
db.episode = require("./episode.model.js")(sequelize, Sequelize);
db.rating = require("./rating.model.js")(sequelize, Sequelize);
db.titleakas = require("./titleakas.model.js")(sequelize, Sequelize);
db.namebasic = require("./namebasic.model.js")(sequelize, Sequelize);
db.titlebasic = require("./basics.model.js")(sequelize, Sequelize);
db.titleprincipal = require("./titleprincipal.model.js")(sequelize, Sequelize);

module.exports = db;
