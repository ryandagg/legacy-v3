/* eslint-disable unicorn/prefer-array-flat */
'use strict'

const _ = require('lodash')

exports.commands = _.flatten([
  require('./commands/missing'),
])
