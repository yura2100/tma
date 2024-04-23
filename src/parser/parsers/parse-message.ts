import { MessageNode } from "../../ast/nodes/index.js";
import { parseIdentifier } from "./parse-identifier.js";
import type { TokensConsumer } from "../tokens-consumer.js";
import { TOKEN_TYPES } from "../../tokenizer/token-types.js";

export function parseMessage(consumer: TokensConsumer): MessageNode {
  const request = parseIdentifier(consumer);

  consumer.consume(TOKEN_TYPES.LEFT_PARENTHESES);
  const actors = [];
  while (consumer.lookahead().type !== TOKEN_TYPES.RIGHT_PARENTHESES) {
    const actor = parseIdentifier(consumer);
    actors.push(actor);

    if (consumer.lookahead().type !== TOKEN_TYPES.RIGHT_PARENTHESES) {
      consumer.consume(TOKEN_TYPES.COMMA);
    }
  }
  consumer.consume(TOKEN_TYPES.RIGHT_PARENTHESES);

  consumer.consume(TOKEN_TYPES.ARROW);
  const error = parseIdentifier(consumer);
  consumer.consume(TOKEN_TYPES.COMMA);

  const response = parseIdentifier(consumer);
  consumer.consume(TOKEN_TYPES.SEMICOLON);

  return new MessageNode(request, actors, error, response);
}
