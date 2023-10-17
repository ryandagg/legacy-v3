'use strict'

const cli = require('heroku-cli-util')

async function run() {
  cli.log('You found me!')
}

module.exports = {
  description: 'Say hello world',
  command: 'missing',
  example: `<%= config.bin %> <%= command.id %>
hello world! (./src/commands/hello/world.ts)
`,
  run: cli.command(run),
}
