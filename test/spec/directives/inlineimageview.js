'use strict';

describe('Directive: inlineimageview', function () {

  // load the directive's module
  beforeEach(module('linksgrabberApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<inlineimageview></inlineimageview>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the inlineimageview directive');
  }));
});
