import { BooleanLiteralNode } from "../../ast/nodes/index.js";
import type { TokensConsumer } from "../tokens-consumer.js";
import { TOKEN_TYPES } from "../../tokenizer/token-types.js";

export function parseBooleanLiteral(
  consumer: TokensConsumer,
): BooleanLiteralNode {
  consumer.consume(TOKEN_TYPES.BOOLEAN);
  return new BooleanLiteralNode();
}
