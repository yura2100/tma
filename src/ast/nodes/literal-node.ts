import type { BooleanLiteralNode } from "./boolean-literal-node.js";
import type { IntLiteralNode } from "./int-literal-node.js";
import type { StringLiteralNode } from "./string-literal-node.js";

export type LiteralNode =
  | BooleanLiteralNode
  | IntLiteralNode
  | StringLiteralNode;
