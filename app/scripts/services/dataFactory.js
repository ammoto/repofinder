'use strict';

/**
 * @ngdoc service
 * @name repoApp.dataFactory
 * @description
 * # dataFactory
 * Retrieves data from github.
 */
angular.module('repoApp')
 .factory('dataFactory', ['$http', function($http) {
    var urlBase = 'http://api.github.com/users/';
    var dataFactory = {};

    dataFactory.getRepos = function (username) {
      return $http.get(urlBase + username + '/repos');
    };

    return dataFactory;
}]);
