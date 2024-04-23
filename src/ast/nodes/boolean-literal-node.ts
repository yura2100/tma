import type { ASTNode } from "../ast-node.js";
import { NODE_TYPE } from "../node-type.js";

export class BooleanLiteralNode implements ASTNode {
  readonly type = NODE_TYPE.BOOLEAN_LITERAL;
}
