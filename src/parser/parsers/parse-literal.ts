import { match } from "ts-pattern";
import type { LiteralNode } from "../../ast/nodes/index.js";
import { parseBooleanLiteral } from "./parse-boolean-literal.js";
import { parseIntLiteral } from "./parse-int-literal.js";
import { parseStringLiteral } from "./parse-string-literal.js";
import type { TokensConsumer } from "../tokens-consumer.js";
import { TOKEN_TYPES } from "../../tokenizer/token-types.js";

export function parseLiteral(consumer: TokensConsumer): LiteralNode {
  const token = consumer.lookahead();
  return match(token)
    .with({ type: TOKEN_TYPES.BOOLEAN }, () => parseBooleanLiteral(consumer))
    .with({ type: TOKEN_TYPES.INT }, () => parseIntLiteral(consumer))
    .with({ type: TOKEN_TYPES.STRING }, () => parseStringLiteral(consumer))
    .otherwise(() => {
      throw new SyntaxError(`Unexpected token: ${token.type}`);
    });
}
