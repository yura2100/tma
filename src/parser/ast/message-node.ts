import { parseIdentifier, type IdentifierNode } from "./identifier-node.js";
import { NODE_TYPE } from "../node-type.js";
import type { TokensConsumer } from "../tokens-consumer.js";
import { TOKEN_TYPES } from "../../tokenizer/token-types.js";

export type MessageNode = {
  readonly type: (typeof NODE_TYPE)["MESSAGE"];
  readonly request: IdentifierNode;
  readonly actors: ReadonlyArray<IdentifierNode>;
  readonly error: IdentifierNode;
  readonly response: IdentifierNode;
};

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

  return { type: NODE_TYPE.MESSAGE, request, actors, error, response };
}
