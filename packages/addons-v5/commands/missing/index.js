'use strict'

const cli = require('heroku-cli-util')

async function run() {
  cli.log('Hello World!')
}

module.exports = {
  description: 'Say hello world',
  topic: 'missing',
  example: `<%= config.bin %> <%= command.id %>
hello world! (./src/commands/hello/world.ts)
`,
  run: cli.command(run),
}
