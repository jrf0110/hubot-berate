// Description:
//   Berate somebody
//
// Dependencies:
//   None
//
// Configuration:
//   None
//
// Commands:
//   hubot berate {name} - insults name
//
// Author:
//   John Fawctt

var insults = [
  "{name}, you're just a stupid penis-gobbler."
, "I used to talk to {name}, but then I stopped talking to dumbasses."
];

module.exports = function(robot) {
  robot.respond(/(berate|insult) (.*)/i, function(msg){
    if (msg.match.length < 2) return;

    var name = msg.match.slice(-1)[0];

    msg.reply(
      insults[
        parseInt(Math.random() * insults.length)
      ].replace(/{name}/g, name)
    );
  });
}