const express = require("express");
const seeddata = require("./controllers/seeddata.controller.js");

seeddata.parse_tsv_file('title.ratings.tsv', 'save_basics_data');
//const bodyParser = require("body-parser");
//const cors = require("cors");

/*const app = express();
require("./routes/seeddata.routes")(app);



const db = require("./models");
db.sequelize.sync();


// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to imdb scrapper."
});

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});*/

