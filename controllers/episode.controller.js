const db = require("../models");
const Episode = db.episode;
const Op = db.Sequelize.Op;

var fs = require('fs');
var LineByLineReader = require('line-by-line');
var dataArray = [];

function insert_episode_data(filename) {

	var file = '../tsvfile/'+filename;
    lr = new LineByLineReader(file);
    
    var lineno=0;

	lr.on('line', function (line) {
	  // pause emitting of lines...
	 lineno++;
	 
	if(lineno%20000==0) lr.pause();	
	 
	 
	 line_array = line.split('\t');

	   
	var episode = {
	    tconst:line_array[0],
	    parentTconst:line_array[1],
	    seasonNumber:line_array[2],
	    episodeNumber:line_array[3],
  	};

  

	if(lineno!=1) dataArray.push(episode);

	if(lineno%20000==0){

	    Episode.bulkCreate(dataArray);

	  	dataArray = [];

	  	setTimeout(function () {
	      lr.resume();
	  	}, 10000);
	 }

	});

	lr.on('end', function () {
	  Episode.bulkCreate(dataArray);
	});
}

insert_episode_data('title.episode.tsv');


/* save crew data*/

module.exports = { insert_episode_data }