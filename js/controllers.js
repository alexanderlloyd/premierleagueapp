'use strict';

/* Controllers */


angular.module('PremierLeagueApp.controllers', [])


   /* teams controller */
  .controller('teamsController', function($scope, footballdataAPIservice) {
    $scope.teamsList = [];
    $scope.pageClass = 'page-league';

     /* filter team name - remove FC, London AFC*/
    $scope.teamName = function(name) {
	    return name.replace(/AFC|London|FC/ig, "");
	};    
     /* filter out URL to retrieve team ID */
    $scope.teamID = function(url) {
	    return url.substr(url.lastIndexOf('/') + 1);
	};
    footballdataAPIservice.getTeams().success(function (response) {
        //Dig into the response to get the relevant data
        $scope.teamsList = response;
    });

  })
  
  /* team controller */
  .controller('teamController', function($scope, $routeParams, footballdataAPIservice) {
    $scope.id = $routeParams.id;
    $scope.team = [];
    $scope.teamDetails = [];
    $scope.pageClass = 'page-team';

    footballdataAPIservice.getTeam($scope.id).success(function (response) {
        $scope.team = response; 
    });

    footballdataAPIservice.getTeamDetails($scope.id).success(function (response) {
        $scope.teamDetails = response; 
    });

  })

  /* fixtures controller */
  .controller('fixturesController', function($scope, $routeParams, footballdataAPIservice) {
    $scope.id = $routeParams.id;
    $scope.fixtures = [];
    $scope.teamDetails = [];
    $scope.pageClass = 'page-fixtures';



    /* filter team name - remove FC, London AFC*/
    $scope.teamName = function(name) {
	    return name.replace(/AFC|London|FC/ig, "");
	};    

    footballdataAPIservice.getFixtures($scope.id).success(function (response) {
        $scope.fixtures = response; 
    }); 

     footballdataAPIservice.getTeamDetails($scope.id).success(function (response) {
        $scope.teamDetails = response; 
    });
});




