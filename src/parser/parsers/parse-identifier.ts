import { IdentifierNode } from "../../ast/nodes/index.js";
import type { TokensConsumer } from "../tokens-consumer.js";
import { TOKEN_TYPES } from "../../tokenizer/token-types.js";

export function parseIdentifier(consumer: TokensConsumer): IdentifierNode {
  const token = consumer.consume(TOKEN_TYPES.IDENTIFIER);
  return new IdentifierNode(token.value);
}
