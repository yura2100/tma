import type { ASTNode } from "../ast-node.js";
import type { Visitor } from "../visitor.js";
import { NODE_TYPE } from "../node-type.js";
import type { DeclarationNode } from "./declaration-node.js";

export class SchemaNode implements ASTNode {
  readonly type = NODE_TYPE.SCHEMA;
  readonly declarations: readonly DeclarationNode[];

  constructor(declarations: readonly DeclarationNode[]) {
    this.declarations = declarations;
  }

  traverse(visitor: Visitor): void {
    visitor.enter(this);
    for (const declaration of this.declarations) {
      declaration.traverse(visitor);
    }
    visitor.leave(this);
  }
}
