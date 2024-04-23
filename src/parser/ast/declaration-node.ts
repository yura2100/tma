import { match } from "ts-pattern";
import {
  type ActorDeclarationNode,
  parseActorDeclaration,
} from "./actor-declaration-node.js";
import {
  parseErrorDeclaration,
  type ErrorDeclarationNode,
} from "./error-declaration-node.js";
import {
  parseRequestDeclaration,
  type RequestDeclarationNode,
} from "./request-declaration-node.js";
import {
  parseResponseDeclaration,
  type ResponseDeclarationNode,
} from "./response-declaration-node.js";
import type { TokensConsumer } from "../tokens-consumer.js";
import { TOKEN_TYPES } from "../../tokenizer/token-types.js";

export type DeclarationNode =
  | ActorDeclarationNode
  | ErrorDeclarationNode
  | RequestDeclarationNode
  | ResponseDeclarationNode;

export function parseDeclaration(consumer: TokensConsumer): DeclarationNode {
  const token = consumer.lookahead();
  return match(token)
    .with({ type: TOKEN_TYPES.ACTOR }, () => parseActorDeclaration(consumer))
    .with({ type: TOKEN_TYPES.ERROR }, () => parseErrorDeclaration(consumer))
    .with({ type: TOKEN_TYPES.REQUEST }, () =>
      parseRequestDeclaration(consumer),
    )
    .with({ type: TOKEN_TYPES.RESPONSE }, () =>
      parseResponseDeclaration(consumer),
    )
    .otherwise(() => {
      throw new SyntaxError(`Unexpected token: ${token.type}`);
    });
}
