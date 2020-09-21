
const cron = require("node-cron");
const express = require("express");

var app = express();

cron.schedule("49 26 11 * * *", function() {
    console.log("Running Cron Job");
    require("./controllers/rating.controller.js");
});

cron.schedule("30 23 11 * * *", function() {
    console.log("Running Cron Job");
    require("./controllers/titlebasicscontroller.js");
});

app.listen("8080");