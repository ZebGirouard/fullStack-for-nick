var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

app.use(bodyParser.json());

//Set up Mongoose
mongoose.connect("mongodb://localhost/js-fullstack-app");

var Schema = mongoose.Schema;

var CardSchema = new Schema({
     question: String
});

var Card = mongoose.model('Card', CardSchema);

app.use(express.static('public'));

var questionsList = [
    {question: "What is Batman's guilty pleasure?"},
    {question: "I'm sorry professor, I couldn't complete my homework because _________."},
    {question: "I get by with a little help from _________."},
    {question: "_________. It's a trap!"},
    {question: "The class field trip was completely ruined by _________."},
    {question: "What's my secret power?"}
  ];

app.get('/api/flashcards', function(req, res) {
	Card.find({}, function(error, cards) {
		if (error) res.send(error);
		
		res.json(cards);
	});
});

app.get('/api/flashcards/:id', function(req, res) {
	Card.findById(req.params.id, function(error, card) {
		if (error) res.send(error);
		
		res.json(card);
	});
});

app.post('/api/flashcards', function(req, res) {
	console.log(req.body);
	Card.create(req.body, function(error, card) {
		if (error) res.send(error);
		
		res.json(card);
	});
});

app.delete('/api/flashcards/:id', function(req, res) {
	Card.findByIdAndRemove(req.params.id, function(error, card) {
		if (error) res.send(error);
		
		res.json(card);
	});
});

app.put('/api/flashcards/:id', function(req, res) {
	Card.findByIdAndUpdate(req.params.id, req.body, function(error, card) {
		if (error) res.send(error);
		
		res.json(card);
	});
});

app.listen(3000, function() {
	console.log("Server listening on localhost:3000");
});