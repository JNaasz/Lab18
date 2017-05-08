var app = angular.module('lab18Module');

app.factory('fizzbuzzFactory',function() {
	var newObj = {};

	 var getOutput = function(fizzbuzzNumber) {
			if (fizzbuzzNumber % 3 === 0 && fizzbuzzNumber % 5 === 0) {
				newObj = {answer:"FizzBuzz"};
			} else if (fizzbuzzNumber % 3 === 0) {
				newObj = {answer:"Fizz"};
			} else if (fizzbuzzNumber % 5 === 0) {
				newObj = {answer:"Buzz"};
			} else {
				newObj = {answer:"neither fizz nor buzz"};
			}

		}

       var giveOutput = function() {
       	return newObj; 
       };

       return {getOutput: getOutput,
       		  giveOutput: giveOutput}
	});



