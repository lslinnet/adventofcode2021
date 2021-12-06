import type { Arguments, CommandBuilder } from "yargs";
import yargs from "yargs";
import fs from "fs";
import day1 from '../days/day1';
import day2 from '../days/day2';
import day3 from '../days/day3';

type Options = {
  day: number;
  part: number | undefined;
};

export const command: string = "day <day>";
export const desc: string = "Run Advent Of Code for a given <day> day";

export const builder: CommandBuilder<Options, Options> = (yargs) =>
  yargs
    .options({
      part: { type: "number" },
    })
    .positional("day", { type: "number", demandOption: true });

export const handler = (argv: Arguments<Options>): void => {
  const { day, part } = argv;

  let p = 1;
  if (part !== undefined && part) {
    p = part;
  }

  try {
    const data = fs.readFileSync(`data/day${day}`, "utf8");

    if (data) {
      process.stdout.write(`Data loaded for ${day}...\n`);
      let result = 0;
      switch (day) {
        case 1:
          result = (p == 1) ? day1.first(data) : day1.second(data);
          break;
        case 2:
          result = (p == 1) ? day2.first(data) : day2.second(data);
          break;
        case 3:
          result = (p == 1) ? day3.first(data) : day3.second(data);
          break;
        default:
          process.stdout.write("No day included");
          break;
      }
      process.stdout.write(`Result for Day${day} Part ${(p == 1) ? 'One' : 'Two'}: ${result}`);



      process.stdout.write("\n");
    }
  } catch (err) {
    console.error(err);
  }

  process.stdout.write(`Done executing day ${day} and Part ${p}!`);
  process.exit(0);
};
