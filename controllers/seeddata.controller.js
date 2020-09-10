const db = require("../models");
const Rating = db.rating;
const Basics = db.titlebasic;
const Crew = db.crew;
const Episode = db.episode;
const Namebasic = db.namebasic;
const Titleakas = db.titleakas;
const Titleprincipal = db.titleprincipal;

const Op = db.Sequelize.Op;
var readline = require('readline');
var fs = require('fs');

/* parsing tsv files */
function  parse_tsv_file(filename, name_of_funtion) {
  var line_array;
  var myInterface = readline.createInterface({
    input: fs.createReadStream('./tsvfile/'+filename)
  });

  var lineno = 0;
  myInterface.on('line', function (line) {
    lineno++;
      line_array = line.split('\t');

      
      if(name_of_funtion=='save_rating_data') save_rating_data(line_array);
      else if(name_of_funtion=='save_titleprincipal_data') save_titleprincipal_data(line_array);
      else if(name_of_funtion=='save_basics_data') save_basics_data(line_array);
      else if(name_of_funtion=='save_crew_data') save_crew_data(line_array);
      else if(name_of_funtion=='save_episode_data') save_episode_data(line_array);
      else if(name_of_funtion=='save_namebasic_data') save_namebasic_data(line_array);
      else if(name_of_funtion=='save_titleakas_data') save_titleakas_data(line_array);

      console.log(line_array);
      console.log('Line number ' + lineno + ': ' + line);
  });
}
/* parsing tsv files */


/* save rating data*/
function save_rating_data(line_array) {
  const rating = {
    tconst: line_array[0],
    averageRating: line_array[1],
    numVotes: line_array[2],
  };

  
  Rating.create(rating);
    
}
/* save rating data*/


/* save basics data*/
function save_basics_data(line_array) {
  const basics = {
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

  
  Basics.create(basics);
    
}
/* save basics data*/


/* save crew data*/
function save_crew_data(line_array) {
  const crew = {
    tconst:line_array[0],
    directors:line_array[1],
    writers:line_array[2],
  };

  Crew.create(crew);

}
/* save crew data*/


/* save episode data*/
function save_episode_data(line_array) {
  const episode = {
    tconst:line_array[0],
    parentTconst:line_array[1],
    seasonNumber:line_array[2],
    episodeNumber:line_array[3],
  };

  Episode.create(episode);

}
/* save episode data*/

/* save namebasic data*/
function save_namebasic_data(line_array) {
  const namebasic = {
    nconst:line_array[0],
    primaryName:line_array[1],
    birthYear:line_array[2],
    deathYear:line_array[3],
    primaryProfession:line_array[4],
    knownForTitles:line_array[5],
  };
  Namebasic.create(namebasic);
}
/* save namebasic data*/

/* save titleakas data*/
function save_titleakas_data(line_array) {
  const titleakas = {
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
  Titleakas.create(namebasic);
}
/* save titleakas data*/

/* save titleprincipal data*/
function save_titleprincipal_data(line_array) {
  const titleprincipal = {
    tconst:line_array[0],
    ordering:line_array[1],
    nconst:line_array[2],
    category:line_array[3],
    job:line_array[4],
    characters:line_array[5],
  };
  Titleprincipal.create(titleprincipal);
}
/* save titleprincipal data*/


module.exports = { parse_tsv_file }