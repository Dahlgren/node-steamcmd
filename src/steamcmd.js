var os = require('os');
var path = require('path');

var install = require('./install');

function steamCmdExecutable() {
  var platform = os.platform();

  if (platform == 'linux') {
    return path.resolve(__dirname, '..', 'steamcmd', 'linux', 'steamcmd.sh');
  }

  if (platform == 'darwin') {
    return path.resolve(__dirname, '..', 'steamcmd', 'osx', 'steamcmd.sh');
  }

  if (platform == 'win32') {
    return path.resolve(__dirname, '..', 'steamcmd', 'windows', 'steamcmd.exe');
  }

  return null;
}

function steamCmdInstall(appId, path, username, password, platform) {
  var executable = steamCmdExecutable();

  if (executable) {
    install(executable, appId, path, username, password, platform);
  }
}

module.exports = {
  install: steamCmdInstall,
}
