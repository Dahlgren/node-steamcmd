var http = require('http')
var os = require('os')
var path = require('path-extra')
var tarball = require('tarball-extract')
var unzip = require('unzipper')

var env = require('./env')

var urls = {
  darwin: 'http://media.steampowered.com/client/installer/steamcmd_osx.tar.gz',
  linux: 'http://media.steampowered.com/installer/steamcmd_linux.tar.gz',
  win32: 'http://media.steampowered.com/installer/steamcmd.zip'
}

function download (callback) {
  var platform = os.platform()
  var url = urls[platform]
  if (url) {
    if (platform === 'darwin' || platform === 'linux') {
      var tempFile = path.resolve(path.tempdir(), 'steamcmd.tar.gz')
      tarball.extractTarballDownload(url, tempFile, env.directory(), {}, function (err, result) {
        callback(err)
      })
    } else if (platform === 'win32') {
      http.get(url, function (res) {
        res.pipe(unzip.Extract({ path: env.directory() }))
          .on('error', function (err) {
            callback(err)
          })
          .on('close', function () {
            callback(null)
          })
      })
    }
  } else {
    callback(new Error('Platform unsupported'))
  }
}

module.exports = download
