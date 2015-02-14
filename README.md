# SteamCMD

[![Dependency Status](https://david-dm.org/dahlgren/node-steamcmd.png)](https://david-dm.org/dahlgren/node-steamcmd)

Node module to ease using the SteamCMD application

The module will download and install SteamCMD if required. It will be placed in your platforms specific data folder.

* Linux: `~/.config/steamcmd`
* OSX: `~/Library/Application Support/steamcmd`
* Windows: `%LOCALAPPDATA%/steamcmd` or `%APPDATA%/steamcmd`

# Requirements

See requirements for running SteamCMD on your platform, https://developer.valvesoftware.com/wiki/SteamCMD

For example, with Ubuntu you'll need to install lib32gcc1,
`apt-get install lib32gcc1`

# Usage

Can either be used as a command line tool or a module

## Command Line

Commands are executed with current working directory as folder

### Install application

```
Usage: steamcmd [options] [appid]

Options:

  -h, --help                output usage information
  -u, --username [value]    username
  -p, --password [value]    password
  --path [value]            path
  --platform [value]        platform
  --steamGuardCode [value]  code for steam guard
```

Install one application with desired app id. All app ids can be found at  https://developer.valvesoftware.com/wiki/Steam_Application_IDs

## Module

### install(options)

| Option | Description |
| --- | --- |
| applicationId | Application Id to install |
| path | Path to application install directory |
| password | Steam Account Password |
| platform | Specific platform to install if other than current |
| steamGuardCode | Code required for Steam Guard |
| username | Steam Account Username |

Install the specified `applicationId` to `path` using supplied `username` and `password`. If any of them are null then `anonymous` will be used as username. If `platform` is specified it will be used instead of the current OS platform. `steamGuardCode` is required for initial login if Steam Guard is enabled.

# TODO

* Callback on install
