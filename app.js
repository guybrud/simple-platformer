var app = angular.module('gameApp', ['ngRoute']);

app.config(function($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl: 'pages/login.html',
		controller: 'loginCtrl'
	})
	.when('/game', {
		templateUrl: 'pages/game.html',
		controller: 'mainCtrl'
	})
	.otherwise({
    	redirectTo: '/'
    })
})