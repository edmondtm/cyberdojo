import { Abc } from './abc';

const blocks: Array<[string, string]> = [
  ['B', 'O'],
  ['X', 'K'],
  ['D', 'Q'],
  ['C', 'P'],
  ['N', 'A'],
  ['G', 'T'],
  ['R', 'E'],
  ['T', 'G'],
  ['Q', 'D'],
  ['F', 'S'],
  ['J', 'W'],
  ['H', 'U'],
  ['V', 'I'],
  ['A', 'N'],
  ['O', 'B'],
  ['E', 'R'],
  ['F', 'S'],
  ['L', 'Y'],
  ['P', 'C'],
  ['Z', 'M'],
];

describe('Abc', () => {
  it('should be defined', () => {
    expect(new Abc([...blocks])).toBeDefined();
  });

  it('should generate all blocks when initialized', () => {
    const abc = new Abc([...blocks]);
    expect(abc.getBlocks()).toEqual(blocks);
  });

  it('once a letter on a block is used that block cannot be used again', () => {
    const test1 = new Abc([...blocks]);
    test1.canMakeWord('B');
    expect([...test1.getBlocks()]).toEqual([...blocks.slice(1)]);

    const test2 = new Abc([...blocks]);
    test2.canMakeWord('Z');
    expect(test2.getBlocks()).toEqual(blocks.slice(0, -1));
  });

  it('the function should be case sensitive', () => {
    const test1 = new Abc([...blocks]);
    test1.canMakeWord('b');
    expect([...test1.getBlocks()]).toEqual([...blocks.slice(1)]);

    const test2 = new Abc([...blocks]);
    test2.canMakeWord('z');
    expect(test2.getBlocks()).toEqual(blocks.slice(0, -1));
  });

  it('can_make_word("A")', () => {
    const abc = new Abc([...blocks]);
    expect(abc.canMakeWord('A')).toBeTruthy();
  });

  it('when a multiple letters word is inserted, it should process individually', () => {
    const test1 = new Abc([...blocks]);
    expect(test1.canMakeWord('ZZ')).toBeFalsy();
    const test2 = new Abc([...blocks]);
    expect(test2.canMakeWord('BKD')).toBeTruthy();
  });

  it('can_make_word("BARK")', () => {
    const abc = new Abc([...blocks]);
    expect(abc.canMakeWord('BARK')).toBeTruthy();
  });

  it('can_make_word("BOOK")', () => {
    const abc = new Abc([...blocks]);
    expect(abc.canMakeWord('BOOK')).toBeFalsy();
  });

  it('can_make_word("TREAT")', () => {
    const abc = new Abc([...blocks]);
    expect(abc.canMakeWord('TREAT')).toBeTruthy();
  });

  it('can_make_word("COMMON")', () => {
    const abc = new Abc([...blocks]);
    expect(abc.canMakeWord('COMMON')).toBeFalsy();
  });

  it('can_make_word("SQUARD")', () => {
    const abc = new Abc([...blocks]);
    expect(abc.canMakeWord('SQUARD')).toBeTruthy();
  });

  it('can_make_word("CONFUSE")', () => {
    const abc = new Abc([...blocks]);
    expect(abc.canMakeWord('CONFUSE')).toBeTruthy();
  });
});
