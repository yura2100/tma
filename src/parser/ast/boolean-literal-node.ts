import { NODE_TYPE } from "../node-type.js";
import type { TokensConsumer } from "../tokens-consumer.js";
import { TOKEN_TYPES } from "../../tokenizer/token-types.js";

export type BooleanLiteralNode = {
  readonly type: (typeof NODE_TYPE)["BOOLEAN_LITERAL"];
};

export function parseBooleanLiteral(
  consumer: TokensConsumer,
): BooleanLiteralNode {
  consumer.consume(TOKEN_TYPES.BOOLEAN);
  return { type: NODE_TYPE.BOOLEAN_LITERAL };
}
