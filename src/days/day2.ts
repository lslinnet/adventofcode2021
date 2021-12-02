import { posix } from "path/posix";

interface Position {
  x: number,
  y: number
}

class Day2 {
  first(input: string): number {
    let commands = input.split("\n");
    commands = commands.map((command) => {
      return command.trim();
    });

    let pos: Position = {
      x: 0,
      y: 0
    }

    pos.x = parseInt(commands.filter((element: string) => {
      if (this.getForward(element) === "forward") {
        return true;
      }

      return false;
    }).reduce((prev: string, curr: string) => {
      if (this.getForward(prev) === "forward") {
        prev = prev.substring(8,9);
      }

      return (parseInt(curr.substring(8,9)) + parseInt(prev)).toString();
    }));

    pos.y = parseInt(commands.filter((element: string) => {
      if (this.getDown(element) === "down") {
        return true;
      }
      if (this.getUp(element) === "up") {
        return true;
      }
      return false;
    }).reduce((prev: string, curr: string) => {
      if (this.getDown(prev)) {
        prev = prev.replace(this.getDown(prev) + " ", "");
      }
      if (this.getUp(prev)) {
        prev = prev.replace(this.getUp(prev) + " ", "");
      }

      if (this.getDown(curr)) {
        curr = curr.replace(this.getDown(curr) + " ", "");
      }
      if (this.getUp(curr)) {
        return (parseInt(prev) - parseInt(curr.replace(this.getUp(curr) + " ", ""))).toString();
      }

      return (parseInt(curr) + parseInt(prev)).toString();
    }));

    return pos.x * pos.y;
  }

  second(input: string): number {
    let commands = input.split("\n");
    commands = commands.map((command) => {
      return command.trim();
    });

    let pos: Position = {
      x: 0,
      y: 0
    }
    let aim: number = 0;

    for (let index = 0; index < commands.length; index++) {
      const c = commands[index];
      if (this.getForward(c)) {
        const f = c.replace(this.getForward(c) + " ", "");
        pos.x = pos.x + parseInt(f);
        if (aim !== 0) {
          pos.y = pos.y + (aim * parseInt(f));
        }
      }
      if (this.getUp(c)) {
        const u = c.replace(this.getUp(c) + " ", "");
        aim = aim - parseInt(u);
      }
      if (this.getDown(c)) {
        const d = c.replace(this.getDown(c) + " ", "");
        aim = aim + parseInt(d);
      }
    }

    return pos.x * pos.y;
  }

  getForward(s: string): string {
    return (s.substring(0,7) === "forward") ? "forward" : "";
  }
  getDown(s: string): string {
    return (s.substring(0,4) === "down") ? "down" : "";
  }
  getUp(s: string): string {
    return (s.substring(0,2) === "up") ? "up" : "";
  }
}

export default new Day2();
