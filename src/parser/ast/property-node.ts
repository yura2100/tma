import { parseIdentifier, type IdentifierNode } from "./identifier-node.js";
import { parseLiteral, type LiteralNode } from "./literal-node.js";
import { NODE_TYPE } from "../node-type.js";
import type { TokensConsumer } from "../tokens-consumer.js";
import { TOKEN_TYPES } from "../../tokenizer/token-types.js";

export type PropertyNode = {
  readonly type: (typeof NODE_TYPE)["PROPERTY"];
  readonly identifier: IdentifierNode;
  readonly literal: LiteralNode;
};

export function parseProperty(consumer: TokensConsumer): PropertyNode {
  const identifier = parseIdentifier(consumer);
  consumer.consume(TOKEN_TYPES.COLON);
  const literal = parseLiteral(consumer);
  consumer.consume(TOKEN_TYPES.SEMICOLON);
  return { type: NODE_TYPE.PROPERTY, identifier, literal };
}
