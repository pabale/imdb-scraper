module.exports = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: "Password123!",
  DB: "imdb_scrapper",
  dialect: "mysql",
  pool: {
    max: 1000,
    min: 0,
    acquire: 300000,
    idle: 10000
  }
};