
const cron = require("node-cron");
const express = require("express");

var app = express();

cron.schedule("1 35 2 * * *", function() {
    console.log("Running Cron Job");
    require("./controllers/rating.controller.js");
});

cron.schedule("59 35 2 * * *", function() {
    console.log("Running Cron Job");
    require("./controllers/titlebasicscontroller.js");
});

require("./controllers/rating.controller.js");

//app.listen("8080");