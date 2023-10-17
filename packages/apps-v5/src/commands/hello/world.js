'use strict'

const cli = require('heroku-cli-util')

async function run(context) {
  // console.log('context:', context)
  const {word} = (context.flags || {})
  const {test} = (context.args || {})
  cli.log(`word flag: ${word}, test arg: ${test}`)
}

module.exports = {
  description: 'Say hello world',
  topic: 'hello',
  command: 'world',
  flags: [
    {
      name: 'word',
      optional: true,
      hasValue: true,
    },
  ],
  args: [{name: 'test'}],
  example: `<%= config.bin %> <%= command.id %>
hello world! (./src/commands/hello/world.ts)
`,
  run: cli.command(run),
}
