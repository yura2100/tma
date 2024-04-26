import type { IdentifierNode } from "./identifier-node.js";
import type { NullNode } from "./null-node.js";

export type NullableIdentifierNode = IdentifierNode | NullNode;
