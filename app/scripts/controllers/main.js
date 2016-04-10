'use strict';

/**
 * @ngdoc function
 * @name repoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the repoApp
 */
angular.module('repoApp')
  .controller('MainCtrl', function ($scope, dataFactory) {
   $scope.response= [];
   $scope.getRepos = function(username) {
    dataFactory.getRepos(username)
      .then(function (response) {
          if (response.data && response.data.length > 0) {
            $scope.response = response.data;
          } else {
            $scope.status = 'User has no repos.';
          }
      }, function (error) {
        //Reset results
        $scope.response = []
        console.log('error: ',error)
          if (error.status === 404) {
            $scope.status = 'Could not find that user.';
          } else if (error.status === 400) {
            $scope.status = 'Server did not respond.';
          } else if (error.data && error.data.message){
            $scope.status = error.data.message;
          } else {
            $scope.status = 'Internal Server Error.';
          }
      });
    };
  });
