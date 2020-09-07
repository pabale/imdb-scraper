const cheerio = require('cheerio');
var Movie = require('./model/moviemodel');
var mongoose = require('mongoose');

var moviename,votes,rating,actress,category,duration,certificate,information;

function parse_data(body, err) {
    if (err) return console.error(err);
        const $ = cheerio.load(String(body));
        
        console.log("-------------------------------------------Page Start---------------------------------------");

        $('.lister-item').each((i, element) => {
            const row = $(element)
            
                console.log("-------------------------------------------Movie start---------------------------------------");

                /* Get a movie name */
                row.find('div.lister-item-content h3.lister-item-header a').each((j, data) => {
                    console.log("Movie Name: "+$(data).text());
                    moviename = $(data).text();
                })
                /* Get a movie name */

                /* Get a votes count */
                row.find('.sort-num_votes-visible span[name=nv]').each((j, data) => {
                    console.log("Votes: "+$(data).text());
                    votes = $(data).text();
                })
                /* Get a votes count */

                /* Get a rating count */
                row.find('.ratings-imdb-rating strong').each((j, data) => {
                    console.log("Rating: "+$(data).text());
                    rating = $(data).text();
                })
                /* Get a rating count */

                /* Get a actress name */
                var actress='';
                row.find('.lister-item-content p a').each((j, data) => {
                    if(j!=0){
                        actress = actress+$(data).text()+',';
                    }
                })
                actress = actress.replace(/,\s*$/, "");
                console.log("Stars: "+actress);
                /* Get a actress name */


                /* Get a year*/
                row.find('.lister-item-year').each((j, data) => {
                    console.log("Year: "+$(data).text());
                    year = $(data).text();
                })
                /* Get a year*/

                /* Get a movie category*/
                row.find('.genre').each((j, data) => {
                    console.log("Category: "+$(data).text());
                    category = $(data).text();
                })
                /* Get a movie category*/

                /* Get a movie duration*/
                row.find('.runtime').each((j, data) => {
                    console.log("Duration: "+$(data).text());
                    duration = $(data).text();
                })
                /* Get a movie duration*/

                /* Get a movie certificate*/
                row.find('p .text-muted .certificate').each((j, data) => {
                    console.log("Certificate: "+$(data).text());
                    certificate = $(data).text();
                })
                /* Get a movie certificate*/

                /* Get a movie information*/
                row.find('.lister-item-content .text-muted:nth-last-child(3)').each((j, data) => {
                    console.log("Information: "+$(data).text());
                    information = $(data).text();
                })

                /* Get a movie information*/

                insert_data();

                console.log("-------------------------------------------Movie End---------------------------------------");
                
        })

        console.log("-------------------------------------------Page End---------------------------------------");
}

function insert_data()
{
    mongoose.connect('mongodb://localhost/imdb-scrapper', function (err) {
    if (err) throw err;
        
        var movies_data = new Movie({
            _id: new mongoose.Types.ObjectId(),
            moviename: moviename,
            votes: votes,
            rating: rating,
            actress: actress,
            category: category,
            duration: duration,
            year:year,
            certificate: certificate,
            information:information
        });

        movies_data.save();
    });
}

module.exports = { parse_data }