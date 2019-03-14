/*
 * test.js
 * Copyright (C) 2019 zuzak <zuzak@saraneth>
 *
 * Distributed under terms of the MIT license.
 */
const assert = require('assert')
const owo = require('./owo.js')


describe('Substitution', function () {
  const subs = {
    'l': 'w',
    'lllll': 'wwwww',
    'r': 'w',
    'rrrrr': 'wwwww',
    'rlrlrl': 'wwwwww',
    'notification': 'nutification',
    'MPs reject Theresa May\'s revised EU withdrawal deal, throwing UK\'s Brexit plans into confusion':
    'MPs weject Thewesa May\'s wevised EU withdwawaw deaw, thwowing UK\'s Bwexit pwans into confusion'

  }

  Object.keys(subs).forEach(function (x) {
    it(`should substitute ${x} with ${subs[x]}`, function() {
      assert.equal(owo.substitute(x), subs[x])
    })
  })
});


describe('Affixes', function () {
  it(`should have a different number of letters afterwards`, function () {
    const str = '1234567890'
    assert.notEqual(str.length, owo.addAffixes(str).length)
  })
})
