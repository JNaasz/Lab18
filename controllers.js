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

	//controller for cards view

	app.controller('cardController', function($scope, deckOfCards) {
		$scope.cardNum = 0;
		$scope.arrayOfCards = [];
		$scope.drawCards = function () {
			$scope.arrayOfCards.push(deckOfCards.newDeckOfCards());
			$scope.cardNum++;
			console.log($scope.arrayOfCards);
		}})


		.directive("counter", function () {
			return {
				restrict: 'E',
				replace: false,
				template: "<p id='counter'>{{cardNum}}</p>"
			}
		})

	    .directive("drawCard", function () {

				return {
					restrict: 'E',
					replace: false,
					template: '<button type="button" id="draw" ng-click="drawCards()">Draw Cards</button>'
				}
})





})();
