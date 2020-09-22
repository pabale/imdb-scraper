
const cron = require("node-cron");
const express = require("express");

var app = express();
var datetime;

cron.schedule("1 1 1 * * *", function() {
    datetime = new Date();
    console.log(datetime);
    
});

cron.schedule("1 30 1 * * *", function() {
    datetime = new Date();
    console.log(datetime);
    
});