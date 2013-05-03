// Description:
//   Berate somebody
//
// Dependencies:
//   request: ~2.21.0
//
// Configuration:
//   None
//
// Commands:
//   hubot berate {name} - insults name
//
// Author:
//   John Fawctt

var request = require('request');

var canned = [
  "{name}, you're just a stupid penis-gobbler."
, "I used to talk to {name}, but then I stopped talking to dumbasses."
];

var getInsults = function(callback){
  var options = {
    url: 'http://insults.j0.hn/insults?limit=10000'
  , json: true
  };

  request.get(options, function(error, response, body){
    if (error) return callback(error);

    if (response.statusCode != 200) return callback(true);

    callback(null, body);
  });
};

module.exports = function(robot) {
  robot.respond(/(berate|insult) (.*)/i, function(msg){
    if (msg.match.length < 2) return;

    getInults(function(error, insults){
      if (error) insults = canned;

      var name = msg.match.slice(-1)[0];

      msg.reply(
        insults[
          parseInt(Math.random() * insults.length)
        ].replace(/{name}/g, name)
      );
    });
  });
}