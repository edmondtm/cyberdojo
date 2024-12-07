export class Abc {
  private blocks: Array<[string, string]>;

  constructor(blocks: Array<[string, string]>) {
    this.blocks = blocks;
  }

  public canMakeWord(word: string): boolean {
    const indexToRemove = this.blocks.findIndex(
      (block) =>
        block.includes(word[0]?.toUpperCase()) ||
        block.includes(word[0]?.toLowerCase()),
    );

    if (indexToRemove === -1) {
      return false;
    }

    this.blocks.splice(indexToRemove, 1);

    if (word.length === 1) {
      return true;
    }

    return this.canMakeWord(word.slice(1));
  }

  public getBlocks(): Array<[string, string]> {
    return this.blocks;
  }
}
