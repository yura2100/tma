import type { ASTNode } from "../ast-node.js";
import type { Visitor } from "../visitor.js";
import { NODE_TYPE } from "../node-type.js";
import type { IdentifierNode } from "./identifier-node.js";
import type { NullableIdentifierNode } from "./nullable-identifier-node.js";

export class MessageNode implements ASTNode {
  readonly type = NODE_TYPE.MESSAGE;
  readonly request: IdentifierNode;
  readonly actors: ReadonlyArray<IdentifierNode>;
  readonly error: NullableIdentifierNode;
  readonly response: NullableIdentifierNode;

  constructor(
    request: IdentifierNode,
    actors: ReadonlyArray<IdentifierNode>,
    error: NullableIdentifierNode,
    response: NullableIdentifierNode,
  ) {
    this.request = request;
    this.actors = actors;
    this.error = error;
    this.response = response;
  }

  traverse(visitor: Visitor): void {
    visitor.enter(this);
    this.request.traverse(visitor);
    for (const actor of this.actors) {
      actor.traverse(visitor);
    }
    this.error.traverse(visitor);
    this.response.traverse(visitor);
    visitor.leave(this);
  }
}
