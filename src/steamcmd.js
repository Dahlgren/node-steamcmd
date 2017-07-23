var fs = require('fs')

var download = require('./download')
var env = require('./env')
var install = require('./install')

function steamCmdInstall (options) {
  fs.access(env.executable(), fs.constants.X_OK, function (exists) {
    if (exists) {
      install(env.executable(), options)
    } else {
      console.log('SteamCmd needs to be installed')
      download(function (err) {
        if (err) {
          console.err('Failed to install SteamCmd')
        } else {
          console.log('SteamCmd was installed')
          install(env.executable(), options)
        }
      })
    }
  })
}

module.exports = {
  install: steamCmdInstall
}
