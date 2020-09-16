const db = require("../models");
const Titleakas = db.titleakas;
const Op = db.Sequelize.Op;

var fs = require('fs');
var LineByLineReader = require('line-by-line');
var dataArray = [];

function insert_titleakas_data(filename) {

	var file = '../tsvfile/'+filename;
    lr = new LineByLineReader(file);
    
    var lineno=0;

	lr.on('line', function (line) {
	  // pause emitting of lines...
	 lineno++;
	 
		//lr.pause();	
	 
	 
	 line_array = line.split('\t');

	   
		var titleakas = {
		    titleId:line_array[0],
		    ordering:line_array[1],
		    title:line_array[2],
		    region:line_array[3],
		    language:line_array[4],
		    types:line_array[5],
		    runtimeMinutes:line_array[6],
		    attributes:line_array[7],
		    isOriginalTitle:line_array[8],
  		};

  	
  		  if(lineno!=1) dataArray.push(titleakas);

		  

		  if(lineno%500==0){
		    Titleakas.bulkCreate(dataArray);
		    dataArray = [];
		    lr.pause();	   
		  	setTimeout(function () {
		  	  //dataArray = [];
		      lr.resume();
		  	}, 10);
		 }
	});

	lr.on('end', function () {
		//console.log(dataArray);
	  Titleakas.bulkCreate(dataArray);
	});
}

insert_titleakas_data('title.akas.tsv');


/* save crew data*/

module.exports = { insert_titleakas_data }