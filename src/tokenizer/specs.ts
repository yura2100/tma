import { TOKEN_TYPES } from "./token-types.js";

export const SPECS = [
  // Whitespace
  [/^\s+/, null],
  // Comment
  [/^#.*/, null],
  // Symbols
  [/^;/, TOKEN_TYPES.SEMICOLON],
  [/^:/, TOKEN_TYPES.COLON],
  [/^,/, TOKEN_TYPES.COMMA],
  [/^\(/, TOKEN_TYPES.LEFT_PARENTHESES],
  [/^\)/, TOKEN_TYPES.RIGHT_PARENTHESES],
  [/^{/, TOKEN_TYPES.LEFT_CURLY_BRACE],
  [/^}/, TOKEN_TYPES.RIGHT_CURLY_BRACE],
  [/^\*/, TOKEN_TYPES.ASTERISK],
  [/^_/, TOKEN_TYPES.UNDERSCORE],
  [/^->/, TOKEN_TYPES.ARROW],
  // Keywords
  [/^\brequest\b/, TOKEN_TYPES.REQUEST],
  [/^\bresponse\b/, TOKEN_TYPES.RESPONSE],
  [/^\berror\b/, TOKEN_TYPES.ERROR],
  [/^\bactor\b/, TOKEN_TYPES.ACTOR],
  // Type keywords
  [/^\bInt\b/, TOKEN_TYPES.INT],
  [/^\bString\b/, TOKEN_TYPES.STRING],
  [/^\bBoolean\b/, TOKEN_TYPES.BOOLEAN],
  // Identifier
  [/\w+/, TOKEN_TYPES.IDENTIFIER],
] as const;
