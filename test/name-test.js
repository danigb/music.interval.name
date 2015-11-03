var vows = require('vows')
var assert = require('assert')
var name = require('../')

vows.describe('music.interval.name').addBatch({
  'edge cases': function () {
    assert.equal(name([1, -1, 0]), '2m')
    assert.equal(name([1, -1, 1]), '9m')
    assert.equal(name([6, 0, 0]), '7M')
    assert.equal(name([6, 0, -1]), '-2m')
    assert.equal(name([0, -1, -1]), '-8A')
    assert.equal(name([2, -1, -1]), '-6M')
    assert.equal(name([0, 1, -1]), '-8d')
    assert.equal(name([0, -1, -4]), '-29A')
  },
  'cached': function () {
    assert.equal(name([1, 0, 1]), '9M')
    assert.equal(name([1, 0, 1]), '9M')
  },
  'without octaves': function () {
    assert.equal(name([1, -1, null]), '2m')
    assert.equal(name([6, 1, null]), '7A')
    assert.equal(name([7, 1, null]), '1A')
    assert.equal(name([9, -1, null]), '3m')
    assert.equal(name([3, -1, null]), '4d')
  },
  'malformed': function () {
    assert.equal(name(null), null)
    assert.equal(name([1, 2]), null)
    assert.equal(name('blah'), null)
  }
}).export(module)
