interface iHundredDoors {
  getDoors(): Door[];
  visitDoors(): Door[];
}

interface Door {
  isOpen: boolean;
}

export class HundredDoors implements iHundredDoors {
  private readonly doors: Door[];
  private counter: number;

  constructor() {
    this.doors = Array.from({ length: 100 }, () => ({
      isOpen: false,
    }));
    this.counter = 0;
  }

  visitDoors(): Door[] {
    this.counter++;
    this.doors.forEach((door, index) => {
      if ((index + 1) % this.counter === 0) {
        door.isOpen = !door.isOpen;
      }
    });
    return [...this.doors];
  }

  getDoors(): Door[] {
    return [...this.doors];
  }
}
