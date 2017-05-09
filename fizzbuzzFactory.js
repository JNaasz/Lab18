var app = angular.module('lab18Module');

app.factory('fizzbuzzFactory',function() {
	var newObj = {};

	 var getOutput = function(fizzbuzzNumber) {
			if (fizzbuzzNumber % 3 === 0 && fizzbuzzNumber % 5 === 0) {
				newObj = {answer:"FizzBuzz", cls: "blue"};
			} else if (fizzbuzzNumber % 3 === 0) {
				newObj = {answer:"Fizz", cls: "red"};
			} else if (fizzbuzzNumber % 5 === 0) {
				newObj = {answer:"Buzz", cls:"yellow"};
			} else {
				newObj = {answer:"Neither fizz nor buzz"};
			}

		}

       var giveOutput = function() {
       	return newObj;
       };

       return {getOutput: getOutput,
       		  giveOutput: giveOutput}
	});
