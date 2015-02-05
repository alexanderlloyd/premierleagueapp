'use strict';

/* App Module */

angular.module('PremierLeagueApp', [
  'PremierLeagueApp.services',
  'PremierLeagueApp.controllers',
  'PremierLeagueApp.filters',
  'ngRoute','ngAnimate'
]).

config(['$routeProvider', function($routeProvider) {
  $routeProvider.
	when("/teams", {templateUrl: "partials/teams.html", controller: "teamsController"}).
	when("/teams/:id", {templateUrl: "partials/team.html", controller: "teamController"}).
	when("/fixtures/:id", {templateUrl: "partials/fixtures.html", controller: "fixturesController"}).
	otherwise({redirectTo: '/teams'});
}]);