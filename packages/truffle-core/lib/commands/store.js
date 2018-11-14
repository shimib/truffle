const command = {
  command: "store",
  description: "Stores EthPM package in Artifactory",
  builder: {},
  help: {
    usage: "truffle store",
    options: []
  },
  run: function(options, done) {
//    const mycmd = require("truffle-mycmd");
    var Config = require("truffle-config");
    var Package = require("../package");

    var config = Config.detect(options);
    Package.publishToArti(config, done);
    // TODO: write the run command here, something like:
    // mycmd(options, done)
    console.log("here");
  }
};

module.exports = command;
