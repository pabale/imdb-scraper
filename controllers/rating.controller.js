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

		  
		  if(lineno!=1) dataArray.push(rating);

		  if(lineno%50000 == 0){
		    Rating.bulkCreate(dataArray);
		    dataArray = [];

		    lr.pause();	   

		  	setTimeout(function () {
		  	  dataArray = [];
		      lr.resume();
		  	}, 20000);
		  }
	});

	lr.on('end', function () {
		//console.log(dataArray);
	  Rating.bulkCreate(dataArray);
	});
}

insert_rating_data('title.ratings.tsv');


/* save crew data*/

module.exports = { insert_rating_data }