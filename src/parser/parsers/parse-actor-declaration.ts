import { ActorDeclarationNode } from "../../ast/nodes/index.js";
import { parseIdentifier } from "./parse-identifier.js";
import { parseIdentifierList } from "./parse-identifier-list.js";
import { parseMessage } from "./parse-message.js";
import type { TokensConsumer } from "../tokens-consumer.js";
import { TOKEN_TYPES } from "../../tokenizer/token-types.js";

export function parseActorDeclaration(
  consumer: TokensConsumer,
): ActorDeclarationNode {
  consumer.consume(TOKEN_TYPES.ACTOR);
  const identifier = parseIdentifier(consumer);
  const parameters = parseIdentifierList(consumer);

  consumer.consume(TOKEN_TYPES.LEFT_CURLY_BRACE);
  const messages = [];
  while (consumer.lookahead().type !== TOKEN_TYPES.RIGHT_CURLY_BRACE) {
    const message = parseMessage(consumer);
    messages.push(message);
  }
  consumer.consume(TOKEN_TYPES.RIGHT_CURLY_BRACE);

  return new ActorDeclarationNode(identifier, parameters, messages);
}
