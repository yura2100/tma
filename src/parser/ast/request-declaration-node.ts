import { parseIdentifier, type IdentifierNode } from "./identifier-node.js";
import { parseProperty, type PropertyNode } from "./property-node.js";
import { NODE_TYPE } from "../node-type.js";
import type { TokensConsumer } from "../tokens-consumer.js";
import { TOKEN_TYPES } from "../../tokenizer/token-types.js";

export type RequestDeclarationNode = {
  readonly type: (typeof NODE_TYPE)["REQUEST_DECLARATION"];
  readonly identifier: IdentifierNode;
  readonly properties: ReadonlyArray<PropertyNode>;
};

export function parseRequestDeclaration(
  consumer: TokensConsumer,
): RequestDeclarationNode {
  consumer.consume(TOKEN_TYPES.REQUEST);
  const identifier = parseIdentifier(consumer);

  consumer.consume(TOKEN_TYPES.LEFT_CURLY_BRACE);
  const properties = [];
  while (consumer.lookahead().type !== TOKEN_TYPES.RIGHT_CURLY_BRACE) {
    const property = parseProperty(consumer);
    properties.push(property);
  }
  consumer.consume(TOKEN_TYPES.RIGHT_CURLY_BRACE);

  return { type: NODE_TYPE.REQUEST_DECLARATION, identifier, properties };
}
