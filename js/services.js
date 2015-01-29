'use strict';

/* Services */



angular.module('PremierLeagueApp.services', []).
  factory('footballdataAPIservice', function($http) {

    var footballdataAPI = {};

    footballdataAPI.getTeams = function() {
  		$http.defaults.headers.common['Auth-Token'] = '613a6b6937394ae8a94d69f358f76902';
		return $http.get('http://www.football-data.org/alpha/soccerseasons/354/leagueTable?callback=JSON_CALLBACK');
    };

    footballdataAPI.getTeam = function(id) {
  		$http.defaults.headers.common['Auth-Token'] = '613a6b6937394ae8a94d69f358f76902';
		return $http.get('http://www.football-data.org/alpha/teams/'+ id +'/players?callback=JSON_CALLBACK');
    };
    
    footballdataAPI.getFixtures = function(id) {
  		$http.defaults.headers.common['Auth-Token'] = '613a6b6937394ae8a94d69f358f76902';
		return $http.get('http://www.football-data.org/teams/'+ id +'/fixtures/?callback=JSON_CALLBACK');
    };

    return footballdataAPI;
  });