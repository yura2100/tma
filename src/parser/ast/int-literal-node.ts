import { NODE_TYPE } from "../node-type.js";
import type { TokensConsumer } from "../tokens-consumer.js";
import { TOKEN_TYPES } from "../../tokenizer/token-types.js";

export type IntLiteralNode = {
  readonly type: (typeof NODE_TYPE)["INT_LITERAL"];
};

export function parseIntLiteral(consumer: TokensConsumer): IntLiteralNode {
  consumer.consume(TOKEN_TYPES.INT);
  return { type: NODE_TYPE.INT_LITERAL };
}
