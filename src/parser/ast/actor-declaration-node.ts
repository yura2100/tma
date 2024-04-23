import { parseIdentifier, type IdentifierNode } from "./identifier-node.js";
import { parseMessage, type MessageNode } from "./message-node.js";
import { NODE_TYPE } from "../node-type.js";
import type { TokensConsumer } from "../tokens-consumer.js";
import { TOKEN_TYPES } from "../../tokenizer/token-types.js";

export type ActorDeclarationNode = {
  readonly type: (typeof NODE_TYPE)["ACTOR_DECLARATION"];
  readonly identifier: IdentifierNode;
  readonly parameters: ReadonlyArray<IdentifierNode>;
  readonly messages: ReadonlyArray<MessageNode>;
};

export function parseActorDeclaration(
  consumer: TokensConsumer,
): ActorDeclarationNode {
  consumer.consume(TOKEN_TYPES.ACTOR);
  const identifier = parseIdentifier(consumer);

  consumer.consume(TOKEN_TYPES.LEFT_PARENTHESES);
  const parameters = [];
  while (consumer.lookahead().type !== TOKEN_TYPES.RIGHT_PARENTHESES) {
    const parameter = parseIdentifier(consumer);
    parameters.push(parameter);

    if (consumer.lookahead().type !== TOKEN_TYPES.RIGHT_PARENTHESES) {
      consumer.consume(TOKEN_TYPES.COMMA);
    }
  }
  consumer.consume(TOKEN_TYPES.RIGHT_PARENTHESES);

  consumer.consume(TOKEN_TYPES.LEFT_CURLY_BRACE);
  const messages = [];
  while (consumer.lookahead().type !== TOKEN_TYPES.RIGHT_CURLY_BRACE) {
    const message = parseMessage(consumer);
    messages.push(message);
  }
  consumer.consume(TOKEN_TYPES.RIGHT_CURLY_BRACE);

  return {
    type: NODE_TYPE.ACTOR_DECLARATION,
    identifier,
    parameters,
    messages,
  };
}
