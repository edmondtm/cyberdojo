import { HundredDoors } from './hundred-doors';

describe('HundredDoors', () => {
  it('should be defined', () => {
    expect(new HundredDoors()).toBeDefined();
  });

  it('100 doors in a row are all initially closed', () => {
    const hd = new HundredDoors();
    expect(hd.getDoors().length).toBe(100);
    expect(hd.getDoors().every((door) => door.isOpen === false)).toBe(true);
  });

  it('visit doors should toggle isOpen to n % counter', () => {
    const hd = new HundredDoors();
    let beforeVisit, afterVisit;

    for (let counter = 1; counter <= 100; counter++) {
      beforeVisit = hd.getDoors().map((door) => ({ ...door }));
      afterVisit = hd.visitDoors();
      afterVisit.forEach((door, index) => {
        if ((index + 1) % counter === 0) {
          expect(door.isOpen).toBe(!beforeVisit[index].isOpen);
        } else {
          expect(door.isOpen).toBe(beforeVisit[index].isOpen);
        }
      });
    }
  });
});
