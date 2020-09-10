module.exports = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: "Password123!",
  DB: "imdb_scrapper",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};