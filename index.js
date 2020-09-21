
const cron = require("node-cron");
const express = require("express");

var app = express();

cron.schedule("1 2 3 * * *", function() {
    console.log("Running Cron Job1");
    require("./controllers/rating.controller.js");
});

cron.schedule("40 2 3 * * *", function() {
    console.log("Running Cron Job2");
    require("./controllers/titlebasicscontroller.js");
});

//require("./controllers/rating.controller.js");

//app.listen("8080");