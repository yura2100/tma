import { MessageNode } from "../../ast/nodes/index.js";
import { parseIdentifier } from "./parse-identifier.js";
import { parseIdentifierList } from "./parse-identifier-list.js";
import { parseNullableIdentifier } from "./parse-nullable-identifier.js";
import type { TokensConsumer } from "../tokens-consumer.js";
import { TOKEN_TYPES } from "../../tokenizer/token-types.js";

export function parseMessage(consumer: TokensConsumer): MessageNode {
  const request = parseIdentifier(consumer);
  const actors = parseIdentifierList(consumer);

  consumer.consume(TOKEN_TYPES.ARROW);
  const error = parseNullableIdentifier(consumer);
  consumer.consume(TOKEN_TYPES.COMMA);

  const response = parseNullableIdentifier(consumer);
  consumer.consume(TOKEN_TYPES.SEMICOLON);

  return new MessageNode(request, actors, error, response);
}
