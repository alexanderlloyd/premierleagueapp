'use strict';

/* App Module */

angular.module('PremierLeagueApp', [
  'PremierLeagueApp.services',
  'PremierLeagueApp.controllers',
  'ngRoute'
]).

config(['$routeProvider', function($routeProvider) {
  $routeProvider.
	when("/teams", {templateUrl: "partials/teams.html", controller: "teamsController"}).
	when("/teams/:id", {templateUrl: "partials/team.html", controller: "teamController"}).
	otherwise({redirectTo: '/teams'});
}]);