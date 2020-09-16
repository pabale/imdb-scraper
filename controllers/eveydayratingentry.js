'use strict'

const gunzip = require('gunzip-file');

const http = require('https');
const fs = require('fs');

const file = fs.createWriteStream("./title.ratings.tsv.gz");
const request = http.get("https://datasets.imdbws.com/title.ratings.tsv.gz", (response) => {
  response.pipe(file);
  response.on('end', function () {
        gunzip('title.ratings.tsv.gz', 'ratings.tsv', () => {
  		console.log('gunzip done!')
  });
   });
});

 
