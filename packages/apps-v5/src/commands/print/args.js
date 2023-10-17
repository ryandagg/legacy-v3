'use strict'

const cli = require('heroku-cli-util')

async function run(context) {
  const {word} = (context.flags || {})
  const {test} = (context.args || {})
  cli.log(`word flag: ${word}, test arg: ${test}`)
}

module.exports = {
  description: 'print flag & arg',
  topic: 'print',
  command: 'args',
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
