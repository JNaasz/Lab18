var app = angular.module('lab18Module',['as.sortable','ngRoute']);

// routes for navigtion

app.config(function ($routeProvider) {
	$routeProvider
	// view 1 (code challenge)
	.when('/view1', {
		controller: "fizzbuzzController",
		templateUrl: "views/view1.html"
	})
	// view 2 our API page
	.when("/view2", {
		controller: "cardController",
		templateUrl: "views/view2.html"
	})
})