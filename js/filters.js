'use strict';

/* Filters */

angular.module('PremierLeagueApp.filters', [])
.filter('upComingFixtures', function() {
return function (fixtures) {

  var filtered_list = [];

  for (var i = 0; i < fixtures.length; i++) {

    var currentTime = new Date().getTime();
    var fixtureDate = new Date(fixtures[i].date).getTime();
console.log(currentTime);

    if (currentTime <= fixtureDate) {
      filtered_list.push(fixtures[i]);
    }
  }
  return filtered_list;
}
})
.filter('cmdate', [
    '$filter', function($filter) {
        return function(input, format) {
            return $filter('date')(new Date(input), format);
        };
    }
])
.filter('removeSpacesThenLowercase', function () {
       		 return function (text) {
      		var str = text.replace(/\s+/g, '');
      		return str.toLowerCase();
        };
})