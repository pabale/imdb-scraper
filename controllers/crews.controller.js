const db = require("../models");
const Crew = db.crew;
const Op = db.Sequelize.Op;

var fs = require('fs');
var LineByLineReader = require('line-by-line');
var dataArray = [];

function insert_crew_data(filename) {

	var file = '../tsvfile/'+filename;
    lr = new LineByLineReader(file);
    
    var lineno=0;

	lr.on('line', function (line) {
	  // pause emitting of lines...
	 lineno++;
	 
	  if(lineno%100000==0) lr.pause();
	 
	 
	 line_array = line.split('\t');

	   
		var crew = {
		    tconst:line_array[0],
		    directors:line_array[1],
		    writers:line_array[2],
  		};

  	
  		  if(lineno!=1) dataArray.push(crew);

		  

		  if(lineno%100000==0){

		    Crew.bulkCreate(dataArray);

		    dataArray = [];

		  	setTimeout(function () {
		      lr.resume();
		  	}, 1000);
		 }
	});

	lr.on('end', function () {
	  Crew.bulkCreate(dataArray);
	});
}

insert_crew_data('title.crew.tsv');


/* save crew data*/

module.exports = { insert_crew_data }
