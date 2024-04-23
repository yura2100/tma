import { match } from "ts-pattern";
import type { DeclarationNode } from "../../ast/nodes/index.js";
import { parseActorDeclaration } from "./parse-actor-declaration.js";
import { parseErrorDeclaration } from "./parse-error-declaration.js";
import { parseRequestDeclaration } from "./parse-request-declaration.js";
import { parseResponseDeclaration } from "./parse-response-declaration.js";
import type { TokensConsumer } from "../tokens-consumer.js";
import { TOKEN_TYPES } from "../../tokenizer/token-types.js";

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
