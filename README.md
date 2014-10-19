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

`steamcmd install appid`

Install one application with desired app id. All app ids can be found at  https://developer.valvesoftware.com/wiki/Steam_Application_IDs

### Search applications

`steamcmd search query`

Search for `query`, not yet implemented

## Module

### install(appId, path, username, password, platform)

Install the specified `appId` to `path` using supplied `username` and `password`. If any of them are null then `anonymous` will be used as username. If `platform` is specified it will be used instead of the current OS platform.

# TODO

* Callback on install
* Search functionality
* Windows support
