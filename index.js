'use strict';

var invite = require('slack-invite');
var url = require('url');

module.exports = function (ctx, req, res) {
  var cb = done(res);

  if (req.method !== 'POST') {
    return cb(new Error('Invalid HTTP METHOD'));
  }

  var email = ctx.data.email;
  var team = ctx.data.SLACK_TEAM;
  var token = ctx.data.SLACK_TOKEN;

  if (!team) {
    return cb(new Error('Invalid SLACK_TEAM property.'));
  }

  if (!token) {
    return cb(new Error('Invalid SLACK_TOKEN property.'));
  }

  if (!email) {
    return cb(new Error('Invalid email address'));
  }

  var options = {
    email: email,
    team: team,
    token: token
  };

  invite(options, function(response) {
    if (response && response.body) {
      cb(null, response.body);
      return;
    }
    cb(null, {success: true});
  });
};

function done(res) {
  return function(err, data) {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    if (err) {
      res.end(JSON.stringify({ok: false, error: err.message}));
      return;
    }
    res.end(typeof data === 'object' ? JSON.stringify(data) : data);
  };
}
