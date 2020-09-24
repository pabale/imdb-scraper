
const cron = require("node-cron");
const express = require("express");

//var app = express();

cron.schedule("1 40 10 * * *", function() {
    require("./controllers/rating.controller.js");
});

cron.schedule("1 45 10 * * *", function() {
    require("./controllers/titlebasicscontroller.js");
});

//require("./controllers/rating.controller.js");

//app.listen("8080");
