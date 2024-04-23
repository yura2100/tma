import type { Token, TokenType } from "../tokenizer/index.js";

export class TokensConsumer {
  private readonly tokens: ReadonlyArray<Token>;
  private cursor = 0;

  constructor(tokens: Iterable<Token>) {
    this.tokens = Array.from(tokens);
  }

  lookahead(): Token {
    const token = this.safeLookahead();

    if (token === null) {
      throw new SyntaxError("Unexpected end of input");
    }

    return token;
  }

  safeLookahead(): Token | null {
    return this.tokens[this.cursor] ?? null;
  }

  consume(type: TokenType): Token {
    const token = this.lookahead();

    if (token.type !== type) {
      throw new SyntaxError(`Unexpected token: ${token.type}`);
    }

    this.cursor++;
    return token;
  }
}
