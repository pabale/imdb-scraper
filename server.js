const express = require("express");
const seeddata = require("./controllers/seeddata.controller.js");
//const crew = require("./controllers/crew.controller.js");
var readline = require('readline');
var fs = require('fs');
const db = require("./models");



db.sequelize.sync(); //insert database



/*function file_chunk(filename) 
{
	  var stream;
	  var file = './tsvfile/'+filename+'.tsv';
	  var linesCount = 0;
	  var i=1;

	  var dir = './xyz/'+filename;
	  var dir1 = './xyz/';


	  	if (!fs.existsSync(dir1)){
	    	fs.mkdirSync(dir1);
		}

		if (!fs.existsSync(dir)){
	    	fs.mkdirSync(dir);
		}

		if (!fs.existsSync(dir1)){
	    	fs.mkdirSync(dir1);
		}
	  
	  var rl = readline.createInterface({
	      input: fs.createReadStream(file),
	      output: process.stdout,
	      terminal: false
	  });

	  
	  stream = fs.createWriteStream(dir+"/"+filename+"1.txt");
	  rl.on('line', function (line) {
	      linesCount++; // on each linebreak, add +1 to 'linesCount'
	      
	      if(linesCount%400000==0) {
	        stream.write(line);
	        i++;
	        //console.log(filename+" : "+i); 
	        stream.end();
	        stream = fs.createWriteStream(dir+"/"+filename+i+".txt");
	      }else{
	        stream.write(line+"\r\n");  
	      }
	  });

	  rl.on('close', function () {
	    stream.end();
	    console.log(filename+" : "+linesCount)
	  }); 
}*/
 


//const bodyParser = require("body-parser");
//const cors = require("cors");

/*const app = express();
require("./routes/seeddata.routes")(app);






// simple route
/*app.get("/", (req, res) => {
  res.json({ message: "Welcome to imdb scrapper."});
});*/

// set port, listen for requests
/*const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});*/

