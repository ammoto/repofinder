'use strict';

/**
 * @ngdoc directive
 * @name repoApp.directive:githubData
 * @description
 * # githubData
 */
angular.module('repoApp')
  .directive('githubResults', function () {
    return {
      templateUrl: '/views/results.directive.html',
      restrict: 'E',
      scope: {
        response: '=response'
      }
      ,
      link: function postLink(scope, element, attrs) {
      }
    };
  });


