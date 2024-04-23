import type { ASTNode } from "./ast-node.js";

export interface Visitor {
  readonly enter: (node: ASTNode) => void;

  readonly leave: (node: ASTNode) => void;
}
