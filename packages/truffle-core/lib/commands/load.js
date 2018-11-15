const command = {
  command: "load",
  description: "Installs EthPM package from Artifactory",
  builder: {},
  help: {
    usage: "truffle load <package name>@<version>",
    options: []
  },
  run: function(options, done) {
    //    const mycmd = require("truffle-mycmd");
    var Config = require("truffle-config");
    var Package = require("../package");

if (options._ && options._.length > 0) {
      options.packages = options._;
    }

    var config = Config.detect(options);
    Package.installFromArti(config, done);
      
    // TODO: write the run command here, something like:
    // mycmd(options, done)
    console.log("lllloaoood")
  }
};

module.exports = command;
