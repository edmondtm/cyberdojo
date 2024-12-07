export class Abc {
  private blocks: Array<[string, string]>;

  constructor(blocks: Array<[string, string]>) {
    this.blocks = [...blocks];
  }

  public canMakeWord(word: string): boolean {
    if (!word) {
      // edge case where word is empty
      return true;
    }

    const indexToRemove = this.blocks.findIndex(
      (block) =>
        block.includes(word[0]?.toUpperCase()) ||
        block.includes(word[0]?.toLowerCase()),
    );

    if (indexToRemove === -1) {
      return false;
    }

    this.blocks.splice(indexToRemove, 1);

    return this.canMakeWord(word.slice(1));
  }

  public getBlocks(): Array<[string, string]> {
    return [...this.blocks];
  }
}
