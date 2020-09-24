
const cron = require("node-cron");
const express = require("express");

//var app = express();
//var datetime;

cron.schedule("1 1 1 * * *", function() {
  console.log("night 1");
});

cron.schedule("1 2 1 * * *", function() {
   console.log("night 1");
});

cron.schedule("1 1 13 * * *", function() {
	console.log("afternoon 1");
});

cron.schedule("1 2 13 * * *", function() {
	console.log("afternoon 1");
});