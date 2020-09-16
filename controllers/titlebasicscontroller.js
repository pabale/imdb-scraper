const db = require("../models");
const Basics = db.titlebasic;
const Op = db.Sequelize.Op;

var fs = require('fs');
var LineByLineReader = require('line-by-line');

var dataArray = [];

function insert_titlebasic_data(filename) {

	var file = '../tsvfile/'+filename;
    lr = new LineByLineReader(file);
    
    var lineno=0;

	lr.on('line', function (line) {
	  // pause emitting of lines...
	 lineno++;

	 if(lineno%500==0) lr.pause();
	 
	 line_array = line.split('\t');

	   
	var basics = {
	    tconst:line_array[0],
	    titleType:line_array[1],
	    primaryTitle:line_array[2],
	    originalTitle:line_array[3],
	    isAdult:line_array[4],
	    startYear:line_array[5],
	    endYear:line_array[6],
	    runtimeMinutes:line_array[7],
	    genres:line_array[8]
	};


	  if(lineno!=1) dataArray.push(basics);

	  if(lineno%500==0) {

	    Basics.bulkCreate(dataArray);
	    
	    dataArray = [];

	  	setTimeout(function () {
	      lr.resume();
	  	}, 5);

	  }
	});

	lr.on('end', function () {
		//console.log(dataArray);
	  Basics.bulkCreate(dataArray);
	});
}

insert_titlebasic_data('title.basics.tsv');


/* save crew data*/

module.exports = { insert_titlebasic_data }