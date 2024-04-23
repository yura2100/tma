import { NODE_TYPE } from "../node-type.js";
import type { TokensConsumer } from "../tokens-consumer.js";
import { TOKEN_TYPES } from "../../tokenizer/token-types.js";

export type StringLiteralNode = {
  readonly type: (typeof NODE_TYPE)["STRING_LITERAL"];
};

export function parseStringLiteral(
  consumer: TokensConsumer,
): StringLiteralNode {
  consumer.consume(TOKEN_TYPES.STRING);
  return { type: NODE_TYPE.STRING_LITERAL };
}
