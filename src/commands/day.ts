import type { Arguments, CommandBuilder } from "yargs";
import yargs from "yargs";
import fs from "fs";
import day1 from '../days/day1';

type Options = {
  day: number;
  alternative: boolean | undefined;
};

export const command: string = "day <day>";
export const desc: string = "Run Advent Of Code for a given <day> day";

export const builder: CommandBuilder<Options, Options> = (yargs) =>
  yargs
    .options({
      alternative: { type: "boolean" },
    })
    .positional("day", { type: "number", demandOption: true });

export const handler = (argv: Arguments<Options>): void => {
  const { day, alternative } = argv;

  let alt = false;
  if (alternative !== undefined && alternative) {
    alt = true;
  }

  try {
    const data = fs.readFileSync(`data/day${day}${!alt ? "a" : "b"}`, "utf8");

    if (data) {
      process.stdout.write("Data loaded...\n");

      if (!alt) {
        process.stdout.write("Result for Day1 variant a: " + day1.first(data));
      }
      else {
        process.stdout.write("Result for Day1 variant b: " + day1.second(data));
      }

      process.stdout.write("\n");
    }
  } catch (err) {
    console.error(err);
  }

  process.stdout.write(`Done executing day ${day} and alternative being ${alt}!`);
  process.exit(0);
};
