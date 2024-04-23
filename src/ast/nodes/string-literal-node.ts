import type { ASTNode } from "../ast-node.js";
import { NODE_TYPE } from "../node-type.js";

export class StringLiteralNode implements ASTNode {
  readonly type = NODE_TYPE.STRING_LITERAL;
}
