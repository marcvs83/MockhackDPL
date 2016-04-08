var mongoose = require( 'mongoose' );
var Schema   = mongoose.Schema;

var Board = new Schema({
  date: {type: Number, required: true},
  text: {type: String}
});

mongoose.model( 'Board', Board );
mongoose.connect( 'mongodb://localhost/mockhack' );
