const db = require("../models");
const Titleprincipal = db.titleprincipal;																									
const Op = db.Sequelize.Op;

var fs = require('fs');
var LineByLineReader = require('line-by-line');

var dataArray = [];

function insert_title_principal_data(filename) {

	var file = '../tsvfile/'+filename;
    lr = new LineByLineReader(file);
    
    var lineno=0;

	lr.on('line', async function (line) {
	  // pause emitting of lines...
	 lineno++;
	 
	if(lineno%1000==0) lr.pause();
	 
	 
	line_array = line.split('\t');

	   
		var titleprincipal = {
		    tconst:line_array[0],
		    ordering:line_array[1],
		    nconst:line_array[2],
		    category:line_array[3],
		    job:line_array[4],
		    characters:line_array[5],
	  	};


		 if(lineno!=1) dataArray.push(titleprincipal);

		  if(lineno%1000==0){

		    Titleprincipal.bulkCreate(dataArray);

		    dataArray = [];

		  	setTimeout(function () {
		      lr.resume();
		  	}, 300);
		  }

		
	});

	lr.on('end', function () {
		//console.log(dataArray);
	  Titleprincipal.bulkCreate(dataArray);

	});
}

insert_title_principal_data('title.principals.tsv');


/* save crew data*/

module.exports = { insert_title_principal_data }