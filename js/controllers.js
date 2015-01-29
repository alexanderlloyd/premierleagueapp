'use strict';

/* Controllers */


angular.module('PremierLeagueApp.controllers', []).
  controller('teamsController', function($scope, footballdataAPIservice) {
    $scope.teamsFilter = null;
    $scope.teamsList = [];

    footballdataAPIservice.getTeams().success(function (response) {
        //Dig into the response to get the relevant data
        $scope.teamsList = response.standing;
    });
  }).
  
  /* Driver controller */
  controller('teamController', function($scope, $routeParams, footballdataAPIservice) {
    $scope.id = $routeParams.id;
    $scope.fixtures = [];
    $scope.team = [];


    footballdataAPIservice.getFixtures($scope.id).success(function (response) {
        $scope.fixtures = response; 
    }); 
    
    footballdataAPIservice.getTeam($scope.id).success(function (response) {
        $scope.team = response; 
    });


  });