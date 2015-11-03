'use strict'

var ALTER = {
  P: ['dddd', 'ddd', 'dd', 'd', 'P', 'A', 'AA', 'AAA', 'AAAA'],
  M: ['ddd', 'dd', 'd', 'm', 'M', 'A', 'AA', 'AAA', 'AAAA']
}
var TYPES = 'PMMPPMM'
var cache = {}

/**
 * Convert from [array interval notation](https://github.com/danigb/music.array.notation)
 * to [shorthand interval notation](https://en.wikipedia.org/wiki/Interval_(music)#Shorthand_notation)
 *
 * @name name
 * @function
 * @param {Array} interval - the interval in array notation
 * @return {String} the interval string or null if not valid interval
 *
 * @example
 * interval.name([1, 0, 0]) // => '2M'
 * interval.name([1, 0, 1]) // => '9M'
 */
module.exports = function (arr) {
  if (!Array.isArray(arr) || arr.length !== 3) return null
  var str = '|' + arr[0] + '|' + arr[1] + '|' + arr[2]
  return str in cache ? cache[str] : cache[str] = build(arr)
}

function build (arr) {
  var t = TYPES[Math.abs(arr[0]) % 7]
  var n = number(arr)
  var alt = arr[1]
  if (n < 0) alt = t === 'P' ? -alt : -(alt + 1)
  var q = ALTER[t][4 + alt]
  return n + q
}

function number (arr) {
  var simple = (arr[0] % 7) + 1
  if (!arr[2]) return simple
  var dir = arr[2] < 0 ? -1 : 1
  var oct = Math.abs(arr[2])
  if (dir < 0) {
    simple = 9 - simple
    oct--
  }
  return dir * (simple + 7 * oct)
}
