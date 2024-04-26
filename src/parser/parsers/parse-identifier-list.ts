import type { IdentifierNode } from "../../ast/nodes/index.js";
import { parseIdentifier } from "./parse-identifier.js";
import type { TokensConsumer } from "../tokens-consumer.js";
import { TOKEN_TYPES } from "../../tokenizer/token-types.js";

export function parseIdentifierList(
  consumer: TokensConsumer,
): ReadonlyArray<IdentifierNode> {
  consumer.consume(TOKEN_TYPES.LEFT_PARENTHESES);

  const identifiers = [];
  while (consumer.lookahead().type !== TOKEN_TYPES.RIGHT_PARENTHESES) {
    const identifier = parseIdentifier(consumer);
    identifiers.push(identifier);

    if (consumer.lookahead().type !== TOKEN_TYPES.RIGHT_PARENTHESES) {
      consumer.consume(TOKEN_TYPES.COMMA);
    }
  }

  consumer.consume(TOKEN_TYPES.RIGHT_PARENTHESES);

  return identifiers;
}
