(function() {
	var app = angular.module('lab18Module');

	// controller for fizzbuzz
	app.controller("fizzbuzzController",function($scope, fizzbuzzFactory) {
		// will contain fizzbuzz answer
		$scope.fizzbuzzOutput = "";
		// function that will be triggered on form sumbit
		$scope.submit = function(newObj) {
			console.log('clicked');
			fizzbuzzFactory.getOutput(newObj);

			$scope.fizzbuzzOutput= fizzbuzzFactory.giveOutput();
			console.log($scope.fizzbuzzOutput);
		};
	});

	//controller for map view
	app.controller('cardController', function($scope, deckOfCards) {
		$scope.arrayOfCards = [];
		$scope.drawCards = function () {
			deckOfCards.newDeckOfCards();
		$scope.arrayOfCards.push(deckOfCards.returnCards());
		}


		

	});





})();