import type { Arguments, CommandBuilder } from 'yargs';
import yargs from 'yargs';
import { readFileSync } from 'fs';

type Options = {
  day: number;
  alternative: boolean | undefined;
}

export const command: string = 'day <day>';
export const desc: string = 'Run Advent Of Code for a given <day> day';

export const builder: CommandBuilder<Options, Options> = (yargs) =>
  yargs
    .options({
      alternative: { type: 'boolean' },
    })
    .positional('day', { type: 'number', demandOption: true });

export const handler = (argv: Arguments<Options>): void => {
  const { day, alternative } = argv;

  const file = readFileSync(`../../data/day${day}${(alternative ? 'a' : 'b')}`, 'utf-8');

  if (file) {
    import(`../day${day}`).then(day => {
      process.stdout.write(`Result: ${alternative ? day.first(file) : day.second(file)}`);
    })
  }

  process.stdout.write("Loading day!");
  process.exit(0);
}
