var os = require('os')
var path = require('path-extra')

function directory () {
  return path.datadir('steamcmd')
}

function executable () {
  var platform = os.platform()

  if (platform === 'linux') {
    return path.resolve(directory(), 'steamcmd.sh')
  }

  if (platform === 'darwin') {
    return path.resolve(directory(), 'steamcmd.sh')
  }

  if (platform === 'win32') {
    return path.resolve(directory(), 'steamcmd.exe')
  }

  return null
}

module.exports = {
  directory: directory,
  executable: executable
}
