'use strict';

describe('Controller: ConversationsCtrl', function () {

  // load the controller's module
  beforeEach(module('linksgrabberApp'));

  var ConversationsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ConversationsCtrl = $controller('ConversationsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
