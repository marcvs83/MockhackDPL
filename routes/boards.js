var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Board = mongoose.model('Board');

//Get boards

router.get('/', function(req, res, next) {
 Board.find( function( err, boards, count ) {
   res.json(boards);
 });
});

//Make a new board

router.post('/', function(req, res, next) {
 new Board({
   name: req.body.name
 }).save( function(err, board, count) {
   res.json(board);
 });
});

//Update a board

router.put('/:id', function( req, res, next ){
 Board.findByIdAndUpdate(
 req.params.id,
 { $set: { name: req.body.name, description: req.body.description }},
 function(err, board) {
 res.json(board);
 });
});

//Delete a board

router.delete('/:id', function(req, res) {
 Board.findById(req.params.id, function(err, board) {
   board.remove();
   res.status(200).send({success: true});
 });
});

module.exports = router;