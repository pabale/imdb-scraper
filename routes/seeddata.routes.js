module.exports = app => {
  const seeddata = require("../controllers/seeddata.controller.js");

  var router = require("express").Router();

  // Create a new Tutorial
  router.get("/", seeddata.parse_tsv_file);

  app.use('/api/seeddata', router);
};