var app = angular.module('lab18Module');

app.factory('deckOfCards', function($http) {
	var finalData = '';
	return {newDeckOfCards: function(searchCriteria) {
		var promise = $http({
			method: 'GET',
			url: "https://deckofcardsapi.com/api/deck/new/draw/?count=2"
		}).then(function successfulCallback(response) {
			finalData = response.data.cards[0].image;
			console.log(response);
		}, function errorCallback(error) {
			console.log(error);
		});

		return promise;
	},
	returnCards: function() {
		console.log('clicked')
		return finalData;
	}
}
    
});