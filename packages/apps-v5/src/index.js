const fs = require('fs-extra')
const path = require('path')
const {flatten} = require('lodash')

exports.topics = [
  {name: 'apps', description: 'manage apps'},
  {name: 'hello', description: 'test'},
]

function getCommands(dir) {
  function requireCommand(f) {
    let c = require(f)
    return c.default ? c.default : c
  }

  let all = fs.readdirSync(dir).map(f => path.join(dir, f))
  let commands = all
    .filter(f => path.extname(f) === '.js' && !f.endsWith('.test.js'))
    .map(element => requireCommand(element))
  let subs = all
    .filter(f => fs.lstatSync(f).isDirectory())
    .map(element => getCommands(element))
  return flatten(commands.concat(flatten(subs)))
}

exports.commands = getCommands(path.join(__dirname, 'commands'))
