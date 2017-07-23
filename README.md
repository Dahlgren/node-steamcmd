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
Usage: steamcmd [options] [appid] [workshopid]

Options:

  -h, --help                output usage information
  -u, --username [value]    Steam Username
  -p, --password [value]    Steam Password
  --path [value]            Install Path instead of CWD
  --platform [value]        Install application for specific OS
  --steamGuardCode [value]  Code for steam guard
```

If only `applicationId` is defined the desired application will be installed to defined `path`.
If both `applicationId` and `workshopId` are defined then the `workshopId` item for that application will be downloaded using the standard Steam workshop directory structure to `path`.

All app ids can be found at  https://developer.valvesoftware.com/wiki/Steam_Application_IDs

Workshop ID can be found from the Workshop Page url.

## Module

### install(options, callback)

| Option | Description |
| --- | --- |
| applicationId | Application Id to install |
| path | Path to application install directory |
| password | Steam Account Password |
| platform | Specific platform to install if other than current |
| steamGuardCode | Code required for Steam Guard |
| username | Steam Account Username |
| workshopId | Workshop Id to install for the defined Application Id |

If only `applicationId` is defined the desired application will be installed to defined `path`.
If both `applicationId` and `workshopId` are defined then the `workshopId` item for that application will be downloaded using the standard Steam workshop directory structure to `path`.

`username` and `password` will be used to login.
If any of them are omitted then `anonymous` user will be used instead.

If `platform` is specified it will be used instead of the current OS platform. `steamGuardCode` is required for initial login if Steam Guard is enabled.
