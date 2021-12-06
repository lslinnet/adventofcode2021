import day3 from "../../src/days/day3";

describe("Day3", () => {
  const input = `00100
11110
10110
10111
10101
01111
00111
11100
10000
11001
00010
01010`
  test("First", () => {
    expect(day3.first(input)).toBe(198);
  });

  test("Second", () => {
    expect(day3.second(input)).toBe(230);
  });
});
