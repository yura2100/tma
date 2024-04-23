import type { Token } from "../tokenizer/index.js";
import { TokensConsumer } from "./tokens-consumer.js";
import type { SchemaNode } from "../ast/nodes/index.js";
import { parseSchema } from "./parsers/parse-schema.js";

export class Parser {
  private readonly consumer: TokensConsumer;

  constructor(tokens: Iterable<Token>) {
    this.consumer = new TokensConsumer(tokens);
  }

  parse(): SchemaNode {
    return parseSchema(this.consumer);
  }
}
