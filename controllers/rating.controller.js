const db = require("../models");
const Rating = db.rating;
const Op = db.Sequelize.Op;

var fs = require('fs');
var LineByLineReader = require('line-by-line');


var dataArray = [];

function insert_rating_data(filename) {

	var file = '../tsvfile/'+filename;
    lr = new LineByLineReader(file);
    
    var lineno=0;

	lr.on('line', function (line) {
	  // pause emitting of lines...
	 lineno++;
	 
		//lr.pause();	
	 
	 
	 line_array = line.split('\t');

	   
		var rating = {
		    tconst: line_array[0],
		    averageRating: line_array[1],
		    numVotes: line_array[2],
		};

		  
		  //if(lineno!=1) dataArray.push(rating);

		  dataArray.push(rating);

		  if(lineno%100 == 0){

		  		lr.pause();
		    	Rating.bulkCreate(dataArray);
		    	dataArray = [];
			  	setTimeout(function () {
			  	  //dataArray = [];
			      lr.resume();
			  	}, 200);
		  }
	});

	lr.on('end', function () {
		//console.log(dataArray);
	  Rating.bulkCreate(dataArray);
	  console.log(dataArray);
	});
}

insert_rating_data('title.ratings.tsv');


/* save crew data*/

module.exports = { insert_rating_data }