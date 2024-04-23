import type { ActorDeclarationNode } from "./actor-declaration-node.js";
import type { ErrorDeclarationNode } from "./error-declaration-node.js";
import type { RequestDeclarationNode } from "./request-declaration-node.js";
import type { ResponseDeclarationNode } from "./response-declaration-node.js";

export type DeclarationNode =
  | ActorDeclarationNode
  | ErrorDeclarationNode
  | RequestDeclarationNode
  | ResponseDeclarationNode;
