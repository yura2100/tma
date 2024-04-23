import { IntLiteralNode } from "../../ast/nodes/index.js";
import type { TokensConsumer } from "../tokens-consumer.js";
import { TOKEN_TYPES } from "../../tokenizer/token-types.js";

export function parseIntLiteral(consumer: TokensConsumer): IntLiteralNode {
  consumer.consume(TOKEN_TYPES.INT);
  return new IntLiteralNode();
}
