import { NullNode } from "../../ast/nodes/index.js";
import type { TokensConsumer } from "../tokens-consumer.js";
import { TOKEN_TYPES } from "../../tokenizer/token-types.js";

export function parseNull(consumer: TokensConsumer): NullNode {
  consumer.consume(TOKEN_TYPES.UNDERSCORE);
  return new NullNode();
}
