var vows = require('vows')
var assert = require('assert')
var interval = require('../')

vows.describe('music.interval.name').addBatch({
  'edge cases': function () {
    assert.equal(interval([1, -1, 0]), '2m')
    assert.equal(interval([1, -1, 1]), '9m')
    assert.equal(interval([6, 0, 0]), '7M')
    assert.equal(interval([6, 0, -1]), '-2m')
    assert.equal(interval([0, -1, -1]), '-8A')
    assert.equal(interval([2, -1, -1]), '-6M')
    assert.equal(interval([0, 1, -1]), '-8d')
    assert.equal(interval([0, -1, -4]), '-29A')
  },
  'without octaves': function () {
    assert.equal(interval([1, -1, null]), '2m')
    assert.equal(interval([6, 1, null]), '7A')
    assert.equal(interval([7, 1, null]), '1A')
    assert.equal(interval([9, -1, null]), '3m')
    assert.equal(interval([3, -1, null]), '4d')
  },
  'malformed': function () {
    assert.equal(interval(null), null)
    assert.equal(interval([1, 2]), null)
    assert.equal(interval('blah'), null)
  }
}).export(module)
