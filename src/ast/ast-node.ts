import type { NodeType } from "./node-type.js";
import type { Visitor } from "./visitor.js";

export interface ASTNode {
  readonly type: NodeType;

  readonly traverse: (visitor: Visitor) => void;
}
