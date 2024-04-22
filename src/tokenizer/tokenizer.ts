import type { TokenType } from "./token-types.js";
import { SPECS } from "./specs.js";

export type Token = {
  readonly type: TokenType;
  readonly value: string;
};

export class Tokenizer implements IterableIterator<Token> {
  private readonly src: string;
  private cursor: number;

  private constructor(src: string) {
    this.src = src;
    this.cursor = 0;
  }

  static tokenize(src: string): ReadonlyArray<Token> {
    const tokenizer = new Tokenizer(src);
    return Array.from(tokenizer);
  }

  private hasMoreTokens(): boolean {
    return this.cursor < this.src.length;
  }

  private match(regExp: RegExp, src: string): string | null {
    const matched = regExp.exec(src);

    if (matched === null) {
      return null;
    }

    const value = matched[0];
    this.cursor += value.length;

    return value;
  }

  private getNextToken(): Token | null {
    if (!this.hasMoreTokens()) {
      return null;
    }

    const src = this.src.slice(this.cursor);
    for (const [regExp, type] of SPECS) {
      const value = this.match(regExp, src);

      if (value === null) {
        continue;
      }

      if (type === null) {
        return this.getNextToken();
      }

      return { type, value };
    }

    throw new SyntaxError(`Unexpected token ${this.src[0]} at ${this.cursor}`);
  }

  next(): IteratorResult<Token> {
    const token = this.getNextToken();

    if (token === null) {
      return { done: true, value: undefined };
    }

    return { done: false, value: token };
  }

  [Symbol.iterator](): IterableIterator<Token> {
    return this;
  }
}
