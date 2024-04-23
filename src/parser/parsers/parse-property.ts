import { PropertyNode } from "../../ast/nodes/index.js";
import { parseIdentifier } from "./parse-identifier.js";
import { parseLiteral } from "./parse-literal.js";
import type { TokensConsumer } from "../tokens-consumer.js";
import { TOKEN_TYPES } from "../../tokenizer/token-types.js";

export function parseProperty(consumer: TokensConsumer): PropertyNode {
  const identifier = parseIdentifier(consumer);
  consumer.consume(TOKEN_TYPES.COLON);
  const literal = parseLiteral(consumer);
  consumer.consume(TOKEN_TYPES.SEMICOLON);
  return new PropertyNode(identifier, literal);
}
