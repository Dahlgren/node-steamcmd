var child_process = require('child_process');

function createArguments(appId, installPath, username, password, platform) {
  var arguments = [];

  // Force platform type for download
  if (platform) {
    arguments.push('+@sSteamCmdForcePlatformType ' + platform);
  }

  // Use supplied password
  arguments.push('+@NoPromptForPassword 0');

  // Quit on fail
  arguments.push('+@ShutdownOnFailedCommand 1');

  // Authentication
  if (username && password) {
    arguments.push('+login ' + username + ' ' + password);
  } else {
    arguments.push('+login anonymous');
  }

  // Installation directory
  if (installPath) {
    arguments.push('+force_install_dir "' + installPath + '"');
  }

  // App id to install and/or validate
  if (appId) {
    arguments.push('+app_update ' + appId + ' validate');
  }

  // Quit when done
  arguments.push('+quit');

  return arguments;
}

function install(steamCmdPath, appId, installPath, username, password, platform) {
  var process = child_process.execFile(steamCmdPath, createArguments(appId, installPath, username, password, platform));

  process.stdout.on('data', function (data) {
    console.log('stdout: ' + data);
  });

  process.stderr.on('data', function (data) {
    console.log('stderr: ' + data);
  });

  process.on('close', function (code) {
    console.log('child process exited with code ' + code);
  });
}

module.exports = install;
