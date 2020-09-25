const db = require("../models");
const Namebasic = db.namebasic;
const Op = db.Sequelize.Op;

var fs = require('fs');
var LineByLineReader = require('line-by-line');

var dataArray = [];

function insert_name_basic(filename) {

	var file = '../tsvfile/'+filename;
    lr = new LineByLineReader(file);
    
    var lineno=0;

	lr.on('line', function (line) {
	  // pause emitting of lines...
	 lineno++;
	 
	if(lineno%10000== 0) lr.pause();
	 
	 
	 line_array = line.split('\t');

	   
	var namebasic = {
    nconst:line_array[0],
    primaryName:line_array[1],
    birthYear:line_array[2],
    deathYear:line_array[3],
    primaryProfession:line_array[4],
    knownForTitles:line_array[5],
  };
  

	if(lineno!=1) dataArray.push(namebasic);

	if(lineno%10000==0){
	    Namebasic.bulkCreate(dataArray);

	    dataArray = [];

	  	setTimeout(function () {
	      lr.resume();
	  	}, 1000);
	 }

	});

	lr.on('end', function () {
		
	  Namebasic.bulkCreate(dataArray);
	  console.log(lineno);
	});
}

insert_name_basic('name.basics.tsv');


/* save crew data*/

module.exports = { insert_name_basic }