import { parseDeclaration, type DeclarationNode } from "./declaration-node.js";
import { NODE_TYPE } from "../node-type.js";
import type { TokensConsumer } from "../tokens-consumer.js";

export type SchemaNode = {
  readonly type: (typeof NODE_TYPE)["SCHEMA"];
  readonly declarations: readonly DeclarationNode[];
};

export function parseSchema(consumer: TokensConsumer): SchemaNode {
  const declarations = [];
  while (consumer.safeLookahead() !== null) {
    const declaration = parseDeclaration(consumer);
    declarations.push(declaration);
  }

  return { type: NODE_TYPE.SCHEMA, declarations };
}
