import type { NodeType } from "./node-type.js";

export interface ASTNode {
  readonly type: NodeType;
}
