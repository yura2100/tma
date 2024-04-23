import type { Token } from "../tokenizer/index.js";
import { TokensConsumer } from "./tokens-consumer.js";
import { parseSchema, type SchemaNode } from "./ast/index.js";

export class Parser {
  private readonly consumer: TokensConsumer;

  constructor(tokens: Iterable<Token>) {
    this.consumer = new TokensConsumer(tokens);
  }

  parse(): SchemaNode {
    return parseSchema(this.consumer);
  }
}
