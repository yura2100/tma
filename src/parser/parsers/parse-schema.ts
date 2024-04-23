import { SchemaNode } from "../../ast/nodes/index.js";
import { parseDeclaration } from "./parse-declaration.js";
import type { TokensConsumer } from "../tokens-consumer.js";

export function parseSchema(consumer: TokensConsumer): SchemaNode {
  const declarations = [];
  while (consumer.safeLookahead() !== null) {
    const declaration = parseDeclaration(consumer);
    declarations.push(declaration);
  }

  return new SchemaNode(declarations);
}
