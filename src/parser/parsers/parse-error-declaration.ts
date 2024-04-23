import { ErrorDeclarationNode } from "../../ast/nodes/index.js";
import { parseIdentifier } from "./parse-identifier.js";
import { parseProperty } from "./parse-property.js";
import type { TokensConsumer } from "../tokens-consumer.js";
import { TOKEN_TYPES } from "../../tokenizer/token-types.js";

export function parseErrorDeclaration(
  consumer: TokensConsumer,
): ErrorDeclarationNode {
  consumer.consume(TOKEN_TYPES.ERROR);
  const identifier = parseIdentifier(consumer);

  consumer.consume(TOKEN_TYPES.LEFT_CURLY_BRACE);
  const properties = [];
  while (consumer.lookahead().type !== TOKEN_TYPES.RIGHT_CURLY_BRACE) {
    const property = parseProperty(consumer);
    properties.push(property);
  }
  consumer.consume(TOKEN_TYPES.RIGHT_CURLY_BRACE);

  return new ErrorDeclarationNode(identifier, properties);
}
