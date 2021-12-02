class Day1 {
  first(input: string): number {
    let split = input.split("\n");

    split = split.filter((element: any, index: number, list: string[]) => {
      if (index === 0) {
        return false;
      }

      return this.isABiggerThanB(parseInt(element), parseInt(list[index - 1]));
    });
    return split.length || 0;
  }

  second(input: string): number {
    let split = input.split("\n");

    split = split.filter((element: any, index: number, list: string[]) => {
      if (index+2 > list.length) {
        return false;
      }

      if (list.length < (index + 2)) {
        return false;
      }

      const a = this.sum(
        parseInt(list[index]),
        parseInt(list[index+1]),
        parseInt(list[index+2])
      );
      const b = this.sum(
        parseInt(list[index+1]),
        parseInt(list[index+2]),
        parseInt(list[index+3])
      );

      if (Number.isNaN(a) || Number.isNaN(b)) {
        return false;
      }

      return this.isABiggerThanB(b, a);
    });

    return split.length || 0
  }

  sum(a: number, b: number, c: number): number {
    return a + b + c;
  }

  isABiggerThanB(a: number, b: number): boolean {
    if (a > b) {
      return true;
    }
    return false;
  }
}

export default new Day1();
