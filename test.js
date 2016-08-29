'use strict';

require('mocha');
var assert = require('assert');
var slackInviteWt = require('./');

describe('slack-invite-wt', function() {
  it('should export a function', function() {
    assert.equal(typeof slackInviteWt, 'function');
  });
});
