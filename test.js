'use strict';

require('mocha');
var assert = require('assert');
var webtask = require('./');

describe('slack-invite-webtask', function() {
  it('should export a function', function() {
    assert.equal(typeof webtask, 'function');
  });
});
