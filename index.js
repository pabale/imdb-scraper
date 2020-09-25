
const cron = require("node-cron");
const express = require("express");

//var app = express();

cron.schedule("1 1 1 * * *", function() {
    require("./controllers/rating.controller.js");
});

cron.schedule("1 40 7 * * *", function() {
    console.log('start');
    require("./controllers/titlebasicscontroller.js");
    console.log('end');
});

//require("./controllers/rating.controller.js");

//app.listen("8080");
