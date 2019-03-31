#!/usr/bin/env node

const program = require('commander')
const { version } = require('./package.json')

program
  .name('template-scripts')
  .version(version)

program
  .command('generate')
  .description('set up a new template project')
  .action(async () => {
    // do something...
  })

program.parse(process.argv)
