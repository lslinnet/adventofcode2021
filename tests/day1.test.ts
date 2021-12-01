import day1 from '../src/day1';

describe('Day1', () => {
  test('Is a bigger than b', () => {
    expect(day1.isABiggerThanB(2,3)).toBeFalsy();
    expect(day1.isABiggerThanB(3,2)).toBeTruthy();
  });

  test('The number of times a depth measurement increases', () => {
    const input = `199
200
208
210
200
207
240
269
260
263`;

    expect(day1.firstMeasurement(input)).toBe(7);
  });

  test('Test for empty input', () => {
    expect(day1.firstMeasurement("")).toBe(0);
  });

})
