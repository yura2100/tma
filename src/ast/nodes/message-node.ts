import type { ASTNode } from "../ast-node.js";
import { NODE_TYPE } from "../node-type.js";
import type { IdentifierNode } from "./identifier-node.js";

export class MessageNode implements ASTNode {
  readonly type = NODE_TYPE.MESSAGE;
  readonly request: IdentifierNode;
  readonly actors: ReadonlyArray<IdentifierNode>;
  readonly error: IdentifierNode;
  readonly response: IdentifierNode;

  constructor(
    request: IdentifierNode,
    actors: ReadonlyArray<IdentifierNode>,
    error: IdentifierNode,
    response: IdentifierNode,
  ) {
    this.request = request;
    this.actors = actors;
    this.error = error;
    this.response = response;
  }
}
