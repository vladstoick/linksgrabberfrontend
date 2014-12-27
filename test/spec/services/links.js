'use strict';

describe('Service: links', function () {

  // load the service's module
  beforeEach(module('linksgrabberApp'));

  // instantiate service
  var links;
  beforeEach(inject(function (_links_) {
    links = _links_;
  }));

  it('should do something', function () {
    expect(!!links).toBe(true);
  });

});
