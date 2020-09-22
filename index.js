
const cron = require("node-cron");
const express = require("express");

var app = express();
var datetime;

cron.schedule("1 1 1 * * *", function() {
    datetime = new Date();
    console.log(datetime);
    require("./controllers/rating.controller.js");
});

cron.schedule("1 30 1 * * *", function() {
    datetime = new Date();
    console.log(datetime);
    require("./controllers/titlebasicscontroller.js");
});

//require("./controllers/rating.controller.js");

//app.listen("8080");
