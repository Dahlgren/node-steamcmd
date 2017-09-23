var fs = require('fs')

var download = require('./download')
var env = require('./env')
var install = require('./install')

function steamCmdInstall (options, callback) {
  fs.access(env.executable(), (fs.constants || fs).X_OK, function (accessError) {
    if (!accessError) {
      install(env.executable(), options, callback)
    } else {
      console.log('SteamCmd needs to be installed')
      download(function (err) {
        if (err) {
          console.err('Failed to install SteamCmd')

          if (callback) {
            callback(err)
          }
        } else {
          console.log('SteamCmd was installed')
          install(env.executable(), options, callback)
        }
      })
    }
  })
}

module.exports = {
  install: steamCmdInstall
}
