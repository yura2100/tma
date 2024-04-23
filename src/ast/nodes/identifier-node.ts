import type { ASTNode } from "../ast-node.js";
import type { Visitor } from "../visitor.js";
import { NODE_TYPE } from "../node-type.js";

export class IdentifierNode implements ASTNode {
  readonly type = NODE_TYPE.IDENTIFIER;
  readonly name: string;

  constructor(name: string) {
    this.name = name;
  }

  traverse(visitor: Visitor): void {
    visitor.enter(this);
    visitor.leave(this);
  }
}
