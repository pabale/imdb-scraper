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
var LineByLineReader = require('line-by-line');
//var dataArray = [];
const insert_num_record = 2670;
var count=0;
var delay=1000;
 var flag_insert=0;

/* parsing tsv files */
function  parse_tsv_file(filename, name_of_funtion, num_of_record) {
  var line_array;
  var lineno=0;
  
  var myInterface = readline.createInterface({
    input: fs.createReadStream('./tsvfile/'+filename),
    output: process.stdout,
    terminal: false
  });

  var line = 0;
  myInterface.on('line', function (line) {
      
      myInterface.pause();
      lineno++;
      line_array = line.split('\t');
      myInterface.pause();
      
      //logMemoryUsage(lineno);
      //await sleep(5000);

      if(name_of_funtion=='save_rating_data') save_rating_data(line_array, lineno, num_of_record);
      else if(name_of_funtion=='save_titleprincipal_data') save_titleprincipal_data(line_array,lineno,num_of_record);
      else if(name_of_funtion=='save_basics_data') save_basics_data(line_array, lineno, num_of_record);
      else if(name_of_funtion=='save_crew_data') save_crew_data(line_array, lineno, num_of_record);
      else if(name_of_funtion=='save_episode_data') save_episode_data(line_array, lineno, num_of_record);
      else if(name_of_funtion=='save_namebasic_data') save_namebasic_data(line_array, lineno, num_of_record);
      else if(name_of_funtion=='save_titleakas_data') save_titleakas_data(line_array, lineno, num_of_record);
      myInterface.resume();
      //console.log('Line number ' + lineno + ': ' + line);
  });
}

async function countFileLines1(filename, name_of_funtion) {

  var file = './tsvfile/'+filename;
  lr = new LineByLineReader(file);
  var lineno=0;
  var delay=1000;
  
  

  lr.on('error', function (err) {
    // 'err' contains error object
  });

  lr.on('line', function (line) {
    // pause emitting of lines...
    

    line_array = line.split('\t');
    lineno++;

      if(lineno%335710 == 0) {
        flag_insert = 1;
      }

      /*if(name_of_funtion=='save_rating_data') save_rating_data(line_array, lineno);
      else if(name_of_funtion=='save_titleprincipal_data') save_titleprincipal_data(line_array, lineno);
      else if(name_of_funtion=='save_basics_data') save_basics_data(line_array, lineno);
      else if(name_of_funtion=='save_crew_data') save_crew_data(line_array, lineno);
      else if(name_of_funtion=='save_episode_data') save_episode_data(line_array, lineno);
      else if(name_of_funtion=='save_namebasic_data') save_namebasic_data(line_array, lineno);
      else if(name_of_funtion=='save_titleakas_data') save_titleakas_data(line_array, lineno);

      if(lineno%435710 == 0) {
        delay=3000;
        lr.pause();
        setTimeout(function () {
            lr.resume();
        }, delay);
        delay=1000;
      }*/
  });

  lr.on('end', function () {
    console.log(lineno);
  });
}

function sagar()
{
    var stream;
    var file = './tsvfile/title.principals.tsv';
    var linesCount = 0;
    var i=1;
    var dir = './sagar';

    if (!fs.existsSync(dir)){
        fs.mkdirSync(dir);
    }
    
    var rl = readline.createInterface({
        input: fs.createReadStream(file),
        output: process.stdout,
        terminal: false
    });

    
    stream = fs.createWriteStream("./sagar/f1.tsv");
    rl.on('line', function (line) {
        linesCount++; // on each linebreak, add +1 to 'linesCount'
        
        if(linesCount%200000==0) {
          stream.write(line);
          i++;
          console.log(i);
          stream.end();
          stream = fs.createWriteStream("./sagar/f"+i+".tsv");
        }else{
          stream.write(line+"\r\n");  
        }
    });
    rl.on('close', function () {
      stream.end();
      for(var j=1; j<=i;j++){
        countFileLines('f'+j+'.tsv','save_crew_data');
        console.log(j+"j and i value"+i);
      }
    });

}
   

 function countFileLines(filename, name_of_funtion) {
  var dataArray = [];
  var file = './sagar/'+filename;
  lr = new LineByLineReader(file);
  var lineno=0;
  var delay=10;
  
  

  lr.on('error', function (err) {
    // 'err' contains error object
  });

  lr.on('line', async function (line) {
    // pause emitting of lines...
   

    line_array = line.split('\t');
    lineno++;
    if(lineno==1){
      console.log(line);
    }



      var titleprincipal = {
      tconst:line_array[0],
      ordering:line_array[1],
      nconst:line_array[2],
      category:line_array[3],
      job:line_array[4],
      characters:line_array[5],
    };


      dataArray.push(titleprincipal);

      if(lineno%1000 == 0){
        await Titleprincipal.bulkCreate(dataArray);
        dataArray = [];

       /* lr.pause();    
       setTimeout(function () {
            lr.resume();
       }, 1000);*/
      }

    
  


/*

      if(lineno%1000 == 0) {
        flag_insert = 1;
        delay = 500;
        
      }

      if(lineno%1000 == 0){
        lr.pause();

        if(name_of_funtion=='save_rating_data') save_rating_data(line_array, flag_insert);
        else if(name_of_funtion=='save_titleprincipal_data') save_titleprincipal_data(line_array, flag_insert);
        else if(name_of_funtion=='save_basics_data') save_basics_data(line_array, flag_insert);
        else if(name_of_funtion=='save_crew_data') save_crew_data(line_array, flag_insert);
        else if(name_of_funtion=='save_episode_data') save_episode_data(line_array, flag_insert);
        else if(name_of_funtion=='save_namebasic_data') save_namebasic_data(line_array, flag_insert);
        else if(name_of_funtion=='save_titleakas_data') save_titleakas_data(line_array, flag_insert);

        setTimeout(function () {
            lr.resume();
        }, delay);
      }*/

  });

  lr.on('end', function () {
    Titleprincipal.bulkCreate(dataArray);
  });
}




/* parsing tsv files */

/*function get_number_for_muliple(filename, name_of_funtion) {
  var line_array;
  var total_lines = 0;
  var insert_num_record = 0;
     try {
      // read contents of the file
      const data = fs.readFileSync('./tsvfile/'+filename, 'UTF-8');

      // split the contents by new line
      const lines = data.split(/\r?\n/);

      total_lines = lines.length;

      for(var i=2; i<=9;i++) {
          if(total_lines%i==0)
            insert_num_record = total_lines/i;
      }

      console.log(lines.length);
      // print all lines
      lines.forEach((line) => {
          //console.log(line);
          line_array = line.split('\t');
          count++;
          //save_rating_data(line_array, insert_num_record);
          if(name_of_funtion=='save_rating_data') save_rating_data(line_array, insert_num_record);
          else if(name_of_funtion=='save_titleprincipal_data') save_titleprincipal_data(line_array, insert_num_record);
          else if(name_of_funtion=='save_basics_data') save_basics_data(line_array, insert_num_record);
          else if(name_of_funtion=='save_crew_data') save_crew_data(line_array, insert_num_record);
          else if(name_of_funtion=='save_episode_data') save_episode_data(line_array, insert_num_record);
          else if(name_of_funtion=='save_namebasic_data') save_namebasic_data(line_array, insert_num_record);
          else if(name_of_funtion=='save_titleakas_data') save_titleakas_data(line_array, insert_num_record);
      });
  } catch (err) {
      console.error(err);
  }
}

function get_info(xyz) {
  //console.log(xyz);
  Rating.bulkCreate(xyz);
}*/
/* save rating data*/
function save_rating_data(line_array, lineno) {
  var rating = {
    tconst: line_array[0],
    averageRating: line_array[1],
    numVotes: line_array[2],
  };

  dataArray.push(rating);
  if(lineno){
    Rating.bulkCreate(dataArray);
    dataArray = [];
  }

}
/* save rating data*/


/* save basics data*/
function save_basics_data(line_array, lineno) {
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

  //Basics.create(basics);
   dataArray.push(basics);
  if(flag_insert){
    flag_insert = 0;
    Basics.bulkCreate(dataArray);
    dataArray = [];
  }
}
/* save basics data*/


/* save crew data*/
function save_crew_data(line_array, lineno) {
  var crew = {
    tconst:line_array[0],
    directors:line_array[1],
    writers:line_array[2],
  };

  //Crew.create(crew);

  dataArray.push(crew);
  if(lineno){
    Crew.bulkCreate(dataArray);
    dataArray = [];
  }
}
/* save crew data*/


/* save episode data*/
function save_episode_data(line_array, lineno) {
  var episode = {
    tconst:line_array[0],
    parentTconst:line_array[1],
    seasonNumber:line_array[2],
    episodeNumber:line_array[3],
  };

  //Episode.create(episode);

  dataArray.push(episode);
  if(flag_insert){
    flag_insert = 0;
      Episode.bulkCreate(dataArray);
    dataArray = [];
  }

}
/* save episode data*/

/* save namebasic data*/
function save_namebasic_data(line_array, lineno) {
  var namebasic = {
    nconst:line_array[0],
    primaryName:line_array[1],
    birthYear:line_array[2],
    deathYear:line_array[3],
    primaryProfession:line_array[4],
    knownForTitles:line_array[5],
  };

   //dataArray.push(namebasic);

  //Namebasic.create(namebasic);

  dataArray.push(namebasic);
  if(flag_insert){
    flag_insert = 0;
      Namebasic.bulkCreate(dataArray);
      dataArray = [];
  }
}
/* save namebasic data*/

/* save titleakas data*/
function save_titleakas_data(line_array, lineno) {
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

  //dataArray.push(titleakas);
  dataArray.push(titleakas);
  if(flag_insert){
    flag_insert = 0;
      Titleakas.bulkCreate(dataArray);
      dataArray = [];
  }
  
  //Titleakas.create(titleakas);
}
/* save titleakas data*/

/* save titleprincipal data*/
function save_titleprincipal_data(line_array, lineno) {
  var titleprincipal = {
    tconst:line_array[0],
    ordering:line_array[1],
    nconst:line_array[2],
    category:line_array[3],
    job:line_array[4],
    characters:line_array[5],
  };
  
  dataArray.push(titleprincipal);
  if(flag_insert){
    flag_insert = 0;
      Titleprincipal.bulkCreate(dataArray);
      dataArray = [];
  }
  //Titleprincipal.create(titleprincipal);
}
/* save titleprincipal data*/
/*for(var j=1; j<=206;j++){
    countFileLines('f'+j+'.tsv','save_crew_data');
    console.log(j+"j and i value");
}*/


//module.exports = { parse_tsv_file }
module.exports = { countFileLines }