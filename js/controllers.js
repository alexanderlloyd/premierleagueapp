'use strict';

/* Controllers */


angular.module('PremierLeagueApp.controllers', [])

   /* teams controller */
  .controller('teamsController', function($scope, footballdataAPIservice) {
    $scope.teamsList = [];

     /* filter team name - remove FC, London AFC*/
    $scope.teamName = function(url) {
	    return url.replace('AFC', '').replace('FC', '').replace('London', '');
	};    
     /* filter out URL to retrieve team ID */
    $scope.teamID = function(url) {
	    return url.substr(url.lastIndexOf('/') + 1);
	};
    footballdataAPIservice.getTeams().success(function (response) {
        //Dig into the response to get the relevant data
        $scope.teamsList = response.standing;
    });
  })
  
  /* team controller */
  .controller('teamController', function($scope, $routeParams, footballdataAPIservice) {
    $scope.id = $routeParams.id;
    $scope.fixtures = [];
    $scope.team = [];
    $scope.teamDetails = [];


    footballdataAPIservice.getFixtures($scope.id).success(function (response) {
        $scope.fixtures = response; 
    }); 
    
    footballdataAPIservice.getTeam($scope.id).success(function (response) {
        $scope.team = response; 
    });

    footballdataAPIservice.getTeamDetails($scope.id).success(function (response) {
        $scope.teamDetails = response; 
    });


  });





