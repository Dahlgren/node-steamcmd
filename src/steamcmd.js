var fs = require('fs');

var download = require('./download');
var env = require('./env');
var install = require('./install');

function steamCmdInstall(appId, path, username, password, platform) {
  fs.exists(env.executable(), function (exists) {
    if (exists) {
      install(env.executable(), appId, path, username, password, platform);
    } else {
      console.log("SteamCmd needs to be installed");
      download(function (err) {
        if (err) {
          console.err("Failed to install SteamCmd");
        } else {
          console.log("SteamCmd was installed");
          install(env.executable(), appId, path, username, password, platform);
        }
      });
    }
  });
}

module.exports = {
  install: steamCmdInstall,
}
