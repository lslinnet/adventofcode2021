
interface BitCount {
  highs: number,
  lows: number
}

class Day3 {
  first(input: string): number {
    let reports = input
      .split("\n")
      .map((report) => {
        return report.trim();
      });

    let result: BitCount[] = [];

    for (let n = 0; n < reports.length; n++) {
      for (let i = 0; i < reports[n].length; i++) {
        if (n === 0) {
          result[i] = {
            highs: 0,
            lows: 0,
          };
        }
        if (reports[n] && reports[n].charAt(i) === "1") {
          result[i].highs++;
        } else {
          result[i].lows++;
        }
      }
    }
    return (parseInt(result.map((bit): string => {
      return (bit.highs < bit.lows) ? "0" : "1";
    }).reduce((prev: string, curr: string) => {
      return prev + curr;
    }), 2) * parseInt(result.map((bit): string => {
      return (bit.highs > bit.lows) ? "0" : "1";
    }).reduce((prev: string, curr: string) => {
      return prev + curr;
    }), 2));
  }

  second(input: string): number {
    let reports = input
      .split("\n")
      .map((report) => {
        return report.trim();
      });

    let result: BitCount[] = [];

    const stringLength = reports[0].length;
    // Oxygen
    let oxygen: string[] = Object.assign([], reports);
    for (let i = 0; i < stringLength; i++) {
      if (oxygen.length > 1) {
        result = this.getHighLows(oxygen);
        oxygen = oxygen.filter(value => {
          const key: string = (result[i].highs >= result[i].lows) ? "1" : "0";
          return (value.charAt(i) === key)
        });
      }
    }

    let co2: string[] = Object.assign([], reports);
    for (let i = 0; i < stringLength; i++) {
      if (co2.length > 1) {
        result = this.getHighLows(co2);
        co2 = co2.filter(value => {
          const key: string = (result[i].lows > result[i].highs) ? "1" : "0";
          return (value.charAt(i) === key)
        })
      }
    }

    return parseInt(co2[0], 2) * parseInt(oxygen[0], 2);
  }

  getHighLows(reports: string[]): BitCount[] {
    let result: BitCount[] = [];

    for (let n = 0; n < reports.length; n++) {
      for (let i = 0; i < reports[n].length; i++) {
        if (n === 0) {
          result[i] = {
            highs: 0,
            lows: 0,
          };
        }
        if (reports[n] && reports[n].charAt(i) === "1") {
          result[i].highs++;
        } else {
          result[i].lows++;
        }
      }
    }

    return result;
  }
}

export default new Day3();
