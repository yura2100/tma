import type { ASTNode } from "../ast-node.js";
import { NODE_TYPE } from "../node-type.js";
import type { IdentifierNode } from "./identifier-node.js";
import type { LiteralNode } from "./literal-node.js";

export class PropertyNode implements ASTNode {
  readonly type = NODE_TYPE.PROPERTY;
  readonly identifier: IdentifierNode;
  readonly literal: LiteralNode;

  constructor(identifier: IdentifierNode, literal: LiteralNode) {
    this.identifier = identifier;
    this.literal = literal;
  }
}
