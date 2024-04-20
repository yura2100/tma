export const SPECS = [
  // Whitespace
  [/^\s+/, null],
  // Comment
  [/^#.*/, null],
  // Symbols
  [/^;/, ";"],
  [/^:/, ":"],
  [/^,/, ","],
  [/^\(/, "("],
  [/^\)/, ")"],
  [/^{/, "{"],
  [/^}/, "}"],
  [/^\*/, "*"],
  [/^_/, "_"],
  [/^->/, "->"],
  // Keywords
  [/^\brequest\b/, "request"],
  [/^\bresponse\b/, "response"],
  [/^\berror\b/, "error"],
  [/^\bactor\b/, "actor"],
  // Type keywords
  [/^\bInt\b/, "Int"],
  [/^\bString\b/, "String"],
  [/^\bBoolean\b/, "Boolean"],
  // Identifier
  [/\w+/, "IDENTIFIER"],
] as const;
