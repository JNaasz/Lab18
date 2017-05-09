var app = angular.module('lab18Module');

	
app.factory('deckOfCards', function($http) {
		var finalData = 'http://deckofcardsapi.com/static/img/6H.png';
	return {newDeckOfCards: function(searchCriteria) {
		var promise = $http({
			method: 'GET',
			url: "https://deckofcardsapi.com/api/deck/new/draw/?count=2"
		}).then(function successfulCallback(response) {
			finalData = response.data.cards[0].image;
			console.log(finalData);
		}, function errorCallback(error) {
			console.log(error);
		});

		return finalData;
	}
}
    
});