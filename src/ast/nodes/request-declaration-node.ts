import type { ASTNode } from "../ast-node.js";
import { NODE_TYPE } from "../node-type.js";
import type { IdentifierNode } from "./identifier-node.js";
import type { PropertyNode } from "./property-node.js";

export class RequestDeclarationNode implements ASTNode {
  readonly type = NODE_TYPE.REQUEST_DECLARATION;
  readonly identifier: IdentifierNode;
  readonly properties: ReadonlyArray<PropertyNode>;

  constructor(
    identifier: IdentifierNode,
    properties: ReadonlyArray<PropertyNode>,
  ) {
    this.identifier = identifier;
    this.properties = properties;
  }
}