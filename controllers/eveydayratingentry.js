
const cron = require("node-cron");
const express = require("express");

var app = express();

cron.schedule("1 14 11 * * *", function() {
		console.log("Running Cron Job");
		require("./rating.controller.js");
});

cron.schedule("30 16 11 * * *", function() {
    console.log("Running Cron Job");
		require("./titlebasicscontroller.js");
});

app.listen("8080");