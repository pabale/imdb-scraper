'use strict'

const db = require("../models");
const Basics = db.titlebasic;
const Op = db.Sequelize.Op;

const gunzip = require('gunzip-file');
const http = require('https');

var fs = require('fs');
const path='./tsvfile/';
const file = fs.createWriteStream(path+"title.basics.tsv.gz");
var LineByLineReader = require('line-by-line');

var dataArray = [];

function insert_titlebasic_data(filename) {

	var file = path+filename;
    var lr = new LineByLineReader(file);
    
    var lineno=0;

	lr.on('line', function (line) {
	  // pause emitting of lines...
	 lineno++;

	 if(lineno%500==0) lr.pause();
	 
	 var line_array = line.split('\t');

	   
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

	    //Basics.bulkCreate(dataArray);
	    Basics.bulkCreate(dataArray, {
		   	updateOnDuplicate: ["tconst"] 
    	});
	    
	    dataArray = [];

	  	setTimeout(function () {
	      lr.resume();
	  	}, 400);

	  }
	});

	lr.on('end', function () {
	  Basics.bulkCreate(dataArray, {
		   	updateOnDuplicate: ["tconst"] 
    	});
	});
}


const request = http.get("https://datasets.imdbws.com/title.basics.tsv.gz", (response) => {
	response.pipe(file);
	response.on('end', function () {
        gunzip(path+'title.basics.tsv.gz', path+'title.basics.tsv', () => {
  		console.log('File Download successfully!');
  			insert_titlebasic_data('title.basics.tsv');
	  });
   });
});



module.exports = { insert_titlebasic_data }