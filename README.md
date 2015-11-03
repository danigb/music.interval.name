# music.interval.name

[![Build Status](https://travis-ci.org/danigb/music.interval.name.svg?branch=master)](https://travis-ci.org/danigb/music.interval.name)
[![Test Coverage](https://codeclimate.com/github/danigb/music.interval.name/badges/coverage.svg)](https://codeclimate.com/github/danigb/music.interval.name/coverage)
[![Code Climate](https://codeclimate.com/github/danigb/music.interval.name/badges/gpa.svg)](https://codeclimate.com/github/danigb/music.interval.name)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)
[![npm version](https://img.shields.io/npm/v/music.interval.name.svg)](https://www.npmjs.com/package/music.interval.name)
[![license](https://img.shields.io/npm/l/music.interval.name.svg)](https://www.npmjs.com/package/music.interval.name)
[![music.kit](https://img.shields.io/badge/music-kit-yellow.svg)](https://www.npmjs.com/package/music.kit)

A tiny (658 bytes minified) function to convert from [array interval notation](https://github.com/danigb/music.array.notation) to [shorthand interval notation](https://en.wikipedia.org/wiki/Interval_(music)#Shorthand_notation)

```js
var name = require('music.interval.name')
name([0, 0, 1]) // => '8P'
name([1, 1, 0]) // => '2A'
```

To convert in the opposite direction see [music.interval.name.parse](https://github.com/danigb/music.interval.name.parse)

Part of [music.kit](https://www.npmjs.com/package/music.kit)

## Install

Via npm module: `npm install --save music.interval.name`

## Documentation

Just one function, read the [generated documentation here](https://github.com/danigb/music.interval.name/blob/master/API.md)

## License

MIT License
