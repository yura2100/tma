import type { ASTNode } from "../ast-node.js";
import { NODE_TYPE } from "../node-type.js";

export class IdentifierNode implements ASTNode {
  readonly type = NODE_TYPE.IDENTIFIER;
  readonly name: string;

  constructor(name: string) {
    this.name = name;
  }
}
