var child_process = require('child_process');

function createArguments(options) {
  var args = [];

  // Force platform type for download
  if (options.platform) {
    args.push('+@sSteamCmdForcePlatformType ' + options.platform);
  }

  // Use supplied password
  args.push('+@NoPromptForPassword 1');

  // Quit on fail
  args.push('+@ShutdownOnFailedCommand 1');

  if (options.steamGuardCode) {
    args.push('+set_steam_guard_code ' + options.steamGuardCode);
  }

  // Authentication
  if (options.username && options.password) {
    args.push('+login ' + options.username + ' ' + options.password);
  } else {
    args.push('+login anonymous');
  }

  // Installation directory
  if (options.installPath) {
    args.push('+force_install_dir "' + options.installPath + '"');
  }

  // App id to install and/or validate
  if (options.applicationId) {
    args.push('+app_update ' + options.applicationId + ' validate');
  }

  // Quit when done
  args.push('+quit');

  return args;
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
