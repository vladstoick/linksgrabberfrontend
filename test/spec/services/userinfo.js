'use strict';

describe('Service: UserInfo', function () {

  // load the service's module
  beforeEach(module('linksgrabberApp'));

  // instantiate service
  var UserInfo;
  beforeEach(inject(function (_UserInfo_) {
    UserInfo = _UserInfo_;
  }));

  it('should do something', function () {
    expect(!!UserInfo).toBe(true);
  });

});
