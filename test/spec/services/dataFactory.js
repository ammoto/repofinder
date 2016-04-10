'use strict';

describe('Service: dataFactory', function () {

  // load the service's module
  beforeEach(module('repoApp'));

  // instantiate service
  var dataFactory;
  beforeEach(inject(function (_dataFactory_) {
    dataFactory = _dataFactory_;

    //Controller function getRepos
    describe('return proper data from github API', function() {  
      it('should return an array of repo in data property', function () {
        var output = dataFactory.getRepos('facebook');
        expect(output.data.length > 0).toBe(true);
      });
      
      it('should return an error 404 if input user that doesn not exist', function () {
        var error = dataFactory.getRepos('fujf5jf8tjg5j8y47hy6');
        expect(error.status).toBe(404);
      });
    });

  }));
});
