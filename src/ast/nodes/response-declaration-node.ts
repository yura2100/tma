import type { ASTNode } from "../ast-node.js";
import type { Visitor } from "../visitor.js";
import { NODE_TYPE } from "../node-type.js";
import type { IdentifierNode } from "./identifier-node.js";
import type { PropertyNode } from "./property-node.js";

export class ResponseDeclarationNode implements ASTNode {
  readonly type = NODE_TYPE.RESPONSE_DECLARATION;
  readonly identifier: IdentifierNode;
  readonly properties: ReadonlyArray<PropertyNode>;

  constructor(
    identifier: IdentifierNode,
    properties: ReadonlyArray<PropertyNode>,
  ) {
    this.identifier = identifier;
    this.properties = properties;
  }

  traverse(visitor: Visitor): void {
    visitor.enter(this);
    this.identifier.traverse(visitor);
    for (const property of this.properties) {
      property.traverse(visitor);
    }
    visitor.leave(this);
  }
}
