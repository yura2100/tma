export const NODE_TYPE = {
  ACTOR_DECLARATION: "ActorDeclaration",
  BOOLEAN_LITERAL: "BooleanLiteral",
  ERROR_DECLARATION: "ErrorDeclaration",
  IDENTIFIER: "Identifier",
  INT_LITERAL: "IntLiteral",
  MESSAGE: "Message",
  NULL: "Null",
  PROPERTY: "Property",
  REQUEST_DECLARATION: "RequestDeclaration",
  RESPONSE_DECLARATION: "ResponseDeclaration",
  SCHEMA: "Schema",
  STRING_LITERAL: "StringLiteral",
} as const;

export type NodeType = (typeof NODE_TYPE)[keyof typeof NODE_TYPE];
