
const cron = require("node-cron");
const express = require("express");

var app = express();

cron.schedule("50 6 2 * * *", function() {
    console.log("Running Cron Job");
    require("./controllers/rating.controller.js");
});

cron.schedule("30 8 2 * * *", function() {
    console.log("Running Cron Job");
    require("./controllers/titlebasicscontroller.js");
});

app.listen("8080");