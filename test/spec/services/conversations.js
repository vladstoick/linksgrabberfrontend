'use strict';

describe('Service: conversations', function () {

  // load the service's module
  beforeEach(module('linksgrabberApp'));

  // instantiate service
  var conversations;
  beforeEach(inject(function (_conversations_) {
    conversations = _conversations_;
  }));

  it('should do something', function () {
    expect(!!conversations).toBe(true);
  });

});
