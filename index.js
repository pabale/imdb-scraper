
const request = require('request');
const lib = require('./lib');

const options = {
    method: 'GET',
    uri: `https://www.imdb.com/search/title/?title_type=tv_series,tv_miniseries&release_date=2015-01-01,&user_rating=6.0,&num_votes=50,&count=250&view=advanced`,
  }

async function scrap_request(options) {
	await request.get(options, (err, res, body) => {
	    lib.parse_data(body,err);
	 });
}


scrap_request(options);  //first page url

//scrape every pages from the url
for(var k=251;k<=6787;k=k+250){
	const options = {
    method: 'GET',
    uri: `https://www.imdb.com/search/title/?title_type=tv_series,tv_miniseries&release_date=2015-01-01,&user_rating=6.0,&num_votes=50,&count=250&start=`+k+`&ref_=adv_nxt`,
    json: true
  }
  scrap_request(options);
}


   





  var stream;
  var file = './tsvfile/title.principals.tsv';
  var linesCount = 0;
  var i=1;
  
  var rl = readline.createInterface({
      input: fs.createReadStream(file),
      output: process.stdout,
      terminal: false
  });

  var stream = fs.createWriteStream("copy1.txt");
  rl.on('line', function (line) {
      linesCount++; // on each linebreak, add +1 to 'linesCount'
      
      if(linesCount==10000) {
        stream.write(line);
        i++;
        stream.end();
        var stream = fs.createWriteStream("copy"+i+".txt");
      }else{
        stream.write(line);  
      }
  });
  rl.on('close', function () {
    stream.end();
    
  });
