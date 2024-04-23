import { match } from "ts-pattern";
import {
  type BooleanLiteralNode,
  parseBooleanLiteral,
} from "./boolean-literal-node.js";
import { parseIntLiteral, type IntLiteralNode } from "./int-literal-node.js";
import {
  parseStringLiteral,
  type StringLiteralNode,
} from "./string-literal-node.js";
import type { TokensConsumer } from "../tokens-consumer.js";
import { TOKEN_TYPES } from "../../tokenizer/token-types.js";

export type LiteralNode =
  | BooleanLiteralNode
  | IntLiteralNode
  | StringLiteralNode;

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
