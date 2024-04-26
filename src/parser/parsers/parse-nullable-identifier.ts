import type { NullableIdentifierNode } from "../../ast/nodes/index.js";
import type { TokensConsumer } from "../tokens-consumer.js";
import { TOKEN_TYPES } from "../../tokenizer/token-types.js";
import { parseIdentifier } from "./parse-identifier.js";
import { parseNull } from "./parse-null.js";

export function parseNullableIdentifier(
  consumer: TokensConsumer,
): NullableIdentifierNode {
  if (consumer.lookahead().type === TOKEN_TYPES.UNDERSCORE) {
    return parseNull(consumer);
  }

  return parseIdentifier(consumer);
}
