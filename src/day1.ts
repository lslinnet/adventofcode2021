class Day1 {
  firstMeasurement(input: string): number {
    let split = input.split("\n")

    split = split.filter((element: any, index:number, list: string[]) => {
      if (index === 0) {
        return false;
      }

      return this.isABiggerThanB(parseInt(element), parseInt(list[index-1]));
    });
    return split.length || 0;
  }

  isABiggerThanB(a: number, b: number): boolean {
    if (a > b) {
      return true;
    }
    return false;
  }
}

export default new Day1();
