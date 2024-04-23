import type { ASTNode } from "../ast-node.js";
import { NODE_TYPE } from "../node-type.js";
import type { IdentifierNode } from "./identifier-node.js";
import type { MessageNode } from "./message-node.js";

export class ActorDeclarationNode implements ASTNode {
  readonly type = NODE_TYPE.ACTOR_DECLARATION;
  readonly identifier: IdentifierNode;
  readonly parameters: ReadonlyArray<IdentifierNode>;
  readonly messages: ReadonlyArray<MessageNode>;

  constructor(
    identifier: IdentifierNode,
    parameters: ReadonlyArray<IdentifierNode>,
    messages: ReadonlyArray<MessageNode>,
  ) {
    this.identifier = identifier;
    this.parameters = parameters;
    this.messages = messages;
  }
}
