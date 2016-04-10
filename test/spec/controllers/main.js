'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('repoApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });

     //Controller function getRepos
    describe('attach returned github data from dataFactory service to the scope', function() {
      
      it('should attach a list of repos to the scope', function () {
        scope.getRepos('facebook');
        expect(scope.repos.length >= 0).toBeTruthy();
      });

      it('should attach proper status message to scope if user has no repos', function () {
        scope.getRepos('fwf');
        expect(scope.repos.length).toBe(0);
        expect(scope.status).toBe('User has no repos.');
      });

    })

  }));
 
});
