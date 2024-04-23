import type { ASTNode } from "../ast-node.js";
import type { Visitor } from "../visitor.js";
import { NODE_TYPE } from "../node-type.js";

export class IntLiteralNode implements ASTNode {
  readonly type = NODE_TYPE.INT_LITERAL;

  traverse(visitor: Visitor): void {
    visitor.enter(this);
    visitor.leave(this);
  }
}
