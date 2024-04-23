import { NODE_TYPE } from "../node-type.js";
import type { TokensConsumer } from "../tokens-consumer.js";
import { TOKEN_TYPES } from "../../tokenizer/token-types.js";

export type IdentifierNode = {
  readonly type: (typeof NODE_TYPE)["IDENTIFIER"];
  readonly name: string;
};

export function parseIdentifier(consumer: TokensConsumer): IdentifierNode {
  const token = consumer.consume(TOKEN_TYPES.IDENTIFIER);
  return { type: NODE_TYPE.IDENTIFIER, name: token.value };
}
