import { StringLiteralNode } from "../../ast/nodes/index.js";
import type { TokensConsumer } from "../tokens-consumer.js";
import { TOKEN_TYPES } from "../../tokenizer/token-types.js";

export function parseStringLiteral(
  consumer: TokensConsumer,
): StringLiteralNode {
  consumer.consume(TOKEN_TYPES.STRING);
  return new StringLiteralNode();
}
