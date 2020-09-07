var mongoose = require('mongoose');
 
var movieSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    moviename: String,
    votes: String,
    rating: String,
    actress: String,
    category: String,
    duration: String,
    certificate: String,
    information:String,
    year:String,
    created: { 
        type: Date,
        default: Date.now
    }
});
 
var Movie = mongoose.model('Movie', movieSchema);
 
module.exports = Movie;