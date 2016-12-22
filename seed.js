var mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/js-fullstack-app");

var questionsList = [
    {question: "What is Batman's guilty pleasure?"},
    {question: "I'm sorry professor, I couldn't complete my homework because _________."},
    {question: "I get by with a little help from _________."},
    {question: "_________. It's a trap!"},
    {question: "The class field trip was completely ruined by _________."},
    {question: "What's my secret power?"}
  ];

var Schema = mongoose.Schema;

var CardSchema = new Schema({
     question: String
});

var Card = mongoose.model('Card', CardSchema);

Card.remove({}, function(error, deleted) {
	if (error) console.log(error);

	Card.create(questionsList, function(error, cards) {
		if (error) console.log(error);
		
		console.log("Created " + cards.length + " cards.");
		mongoose.connection.close();
	});
});