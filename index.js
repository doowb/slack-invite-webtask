'use strict';

var invite = require('slack-invite');

module.exports = function (ctx, cb) {
  var email = ctx.data.email;
  var team = ctx.data.slack_team;
  var token = ctx.data.slack_token;

  if (!team) {
    return cb(new Error('Invalid slack team'));
  }

  if (!token) {
    return cb(new Error('Invalid slack token'));
  }

  if (!email) {
    return cb(new Error('Invalid email address'));
  }

  var options = {
    email: email,
    team: team,
    token: token,
    channels: 'general'
  };

  invite(options, function(response) {
    cb();
  });
};
