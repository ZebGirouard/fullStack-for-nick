angular.module('CardsAgainstAssembly')
  .controller('CardsController', CardsController);

CardsController.$inject = ["$http"];
function CardsController($http){
  var vm = this;
  $http.get("/api/flashcards")
    .then(function(questions) {
      console.log(questions);
      vm.questionsList = questions.data;
    });
  $http.get("/api/flashcards/58570d3704ecf6255a298fcd")
    .then(function(question) {
      console.log(question);
      vm.singleQuestion = question.data;
    });
  vm.saveCard = function() {
    console.log(vm.newCard);
    $http.post("/api/flashcards", vm.newCard)
      .then(function(card) {
        console.log("Saved card with question: " + card.data.question);
      });
  };
  vm.deleteCard = function(id) {
    console.log(id);
    $http.delete("/api/flashcards/"+id)
      .then(function(card) {
        console.log("Deleted card: " + card.data);
      });
  };
  vm.updateCard = function(card) {
    console.log(card);
    $http.put("/api/flashcards/"+card._id, card)
      .then(function(card) {
        console.log("Updated card: " + card.data);
      });
  };
  // vm.questionsList = [
  //   {question: "What is Batman's guilty pleasure?"},
  //   {question: "I'm sorry professor, I couldn't complete my homework because _________."},
  //   {question: "I get by with a little help from _________."},
  //   {question: "_________. It's a trap!"},
  //   {question: "The class field trip was completely ruined by _________."},
  //   {question: "What's my secret power?"}
  // ]
}