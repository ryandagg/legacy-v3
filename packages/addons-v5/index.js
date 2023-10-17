/* eslint-disable unicorn/prefer-array-flat */
'use strict'

const _ = require('lodash')

exports.commands = _.flatten([
  require('./commands/missing'),
])

exports.resolve = require('./lib/resolve')
exports.createAddon = require('./lib/create_addon')
exports.destroyAddon = require('./lib/destroy_addon')
