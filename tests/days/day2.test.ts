import day2 from "../../src/days/day2";

describe("Day2", () => {
  test("First", () => {
    const input = `forward 5
    down 5
    forward 8
    up 3
    down 8
    forward 2`;
    expect(day2.first(input)).toBe(150);
  });

  test("Second", () => {
    const input = `forward 5
    down 5
    forward 8
    up 3
    down 8
    forward 2`;
    expect(day2.second(input)).toBe(900);
  });
});
