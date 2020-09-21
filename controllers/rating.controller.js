'use strict'

const db = require("../models");
const Rating = db.rating;
const Op = db.Sequelize.Op;

const gunzip = require('gunzip-file');
const http = require('https');

var fs = require('fs');
const file = fs.createWriteStream("../tsvfile/title.ratings.tsv.gz");

var LineByLineReader = require('line-by-line');


var dataArray = [];

function insert_rating_data(filename) {

	var file = '../tsvfile/'+filename;
	
    var lr = new LineByLineReader(file);
    
    var lineno=0;

	lr.on('line', function (line) {
	  // pause emitting of lines...

	  lineno++;

	  if(lineno%100000==0) lr.pause(); 
	  else lr.pause();
	 
	  var line_array = line.split('\t');

	   
		var rating = {
		    tconst: line_array[0],
		    averageRating: line_array[1],
		    numVotes: line_array[2],
		};

		  
		  if(lineno!=1) dataArray.push(rating);


		  if(lineno%100000==0) {
		  		
		    	Rating.bulkCreate(dataArray);	
		    	

		    	dataArray = [];

			  	setTimeout(function () {
			      lr.resume();
			  	}, 3000);

		  }else {	
		  		lr.resume();
		  }
	});

	lr.on('end', function () {
		Rating.bulkCreate(dataArray);
	  	console.log(lineno);
	});
}



const request = http.get("https://datasets.imdbws.com/title.ratings.tsv.gz", (response) => {
	response.pipe(file);
	response.on('end', function () {
        gunzip('../tsvfile/title.ratings.tsv.gz', '../tsvfile/title.ratings.tsv', () => {
  		console.log('File Download successfully!');
  			insert_rating_data('title.ratings.tsv');
	  });
   });
});


module.exports = { insert_rating_data }