#!/usr/bin/env node

import yargs from "yargs";
import { hideBin } from "yargs/helpers";

yargs(hideBin(process.argv))
  // Use the commands directory to scaffold.
  .commandDir("commands", {extensions: ['js', 'ts']})
  // Enable strict mode
  .strict()
  // Useful aliases
  .alias({ h: "help" }).argv;
