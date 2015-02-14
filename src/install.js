var child_process = require('child_process');

function createArguments(options) {
  var arguments = [];

  // Force platform type for download
  if (options.platform) {
    arguments.push('+@sSteamCmdForcePlatformType ' + options.platform);
  }

  // Use supplied password
  arguments.push('+@NoPromptForPassword 1');

  // Quit on fail
  arguments.push('+@ShutdownOnFailedCommand 1');

  // Authentication
  if (options.username && options.password) {
    arguments.push('+login ' + options.username + ' ' + options.password);
  } else {
    arguments.push('+login anonymous');
  }

  // Installation directory
  if (options.installPath) {
    arguments.push('+force_install_dir "' + options.installPath + '"');
  }

  // App id to install and/or validate
  if (options.applicationId) {
    arguments.push('+app_update ' + options.applicationId + ' validate');
  }

  // Quit when done
  arguments.push('+quit');

  return arguments;
}

function install(steamCmdPath, options) {
  var process = child_process.execFile(steamCmdPath, createArguments(options));

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
