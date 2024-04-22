import { describe, expect, it } from "vitest";
import { TOKEN_TYPES } from "./token-types.js";
import { Tokenizer } from "./tokenizer.js";

describe("Tokenizer", () => {
  it("should not produce any tokens for an empty program", () => {
    const tokens = Tokenizer.tokenize("");
    expect(tokens).toEqual([]);
  });

  it("should not produce tokens for whitespaces", () => {
    const tokens = Tokenizer.tokenize("   ");
    expect(tokens).toEqual([]);
  });

  it("should not produce any tokens for tabs", () => {
    const tokens = Tokenizer.tokenize("\t\t\t");
    expect(tokens).toEqual([]);
  });

  it("should not produce any tokens for newlines", () => {
    const tokens = Tokenizer.tokenize("\n\n\n");
    expect(tokens).toEqual([]);
  });

  it("should not produce any tokens for comments", () => {
    const tokens = Tokenizer.tokenize("# This is comment");
    expect(tokens).toEqual([]);
  });

  it("should produce a ; token", () => {
    const tokens = Tokenizer.tokenize(";");
    expect(tokens).toEqual([{ type: TOKEN_TYPES.SEMICOLON, value: ";" }]);
  });

  it("should produce a : token", () => {
    const tokens = Tokenizer.tokenize(":");
    expect(tokens).toEqual([{ type: TOKEN_TYPES.COLON, value: ":" }]);
  });

  it("should produce a , token", () => {
    const tokens = Tokenizer.tokenize(",");
    expect(tokens).toEqual([{ type: TOKEN_TYPES.COMMA, value: "," }]);
  });

  it("should produce a ( token", () => {
    const tokens = Tokenizer.tokenize("(");
    expect(tokens).toEqual([
      { type: TOKEN_TYPES.LEFT_PARENTHESES, value: "(" },
    ]);
  });

  it("should produce a ) token", () => {
    const tokens = Tokenizer.tokenize(")");
    expect(tokens).toEqual([
      { type: TOKEN_TYPES.RIGHT_PARENTHESES, value: ")" },
    ]);
  });

  it("should produce a { token", () => {
    const tokens = Tokenizer.tokenize("{");
    expect(tokens).toEqual([
      { type: TOKEN_TYPES.LEFT_CURLY_BRACE, value: "{" },
    ]);
  });

  it("should produce a } token", () => {
    const tokens = Tokenizer.tokenize("}");
    expect(tokens).toEqual([
      { type: TOKEN_TYPES.RIGHT_CURLY_BRACE, value: "}" },
    ]);
  });

  it("should produce a * token", () => {
    const tokens = Tokenizer.tokenize("*");
    expect(tokens).toEqual([{ type: TOKEN_TYPES.ASTERISK, value: "*" }]);
  });

  it("should produce a _ token", () => {
    const tokens = Tokenizer.tokenize("_");
    expect(tokens).toEqual([{ type: TOKEN_TYPES.UNDERSCORE, value: "_" }]);
  });

  it("should produce a -> token", () => {
    const tokens = Tokenizer.tokenize("->");
    expect(tokens).toEqual([{ type: TOKEN_TYPES.ARROW, value: "->" }]);
  });

  it("should produce a request token", () => {
    const tokens = Tokenizer.tokenize("request");
    expect(tokens).toEqual([{ type: TOKEN_TYPES.REQUEST, value: "request" }]);
  });

  it("should produce a response token", () => {
    const tokens = Tokenizer.tokenize("response");
    expect(tokens).toEqual([{ type: TOKEN_TYPES.RESPONSE, value: "response" }]);
  });

  it("should produce an error token", () => {
    const tokens = Tokenizer.tokenize("error");
    expect(tokens).toEqual([{ type: TOKEN_TYPES.ERROR, value: "error" }]);
  });

  it("should produce an actor token", () => {
    const tokens = Tokenizer.tokenize("actor");
    expect(tokens).toEqual([{ type: TOKEN_TYPES.ACTOR, value: "actor" }]);
  });

  it("should produce an Int token", () => {
    const tokens = Tokenizer.tokenize("Int");
    expect(tokens).toEqual([{ type: TOKEN_TYPES.INT, value: "Int" }]);
  });

  it("should produce a String token", () => {
    const tokens = Tokenizer.tokenize("String");
    expect(tokens).toEqual([{ type: TOKEN_TYPES.STRING, value: "String" }]);
  });

  it("should produce a Boolean token", () => {
    const tokens = Tokenizer.tokenize("Boolean");
    expect(tokens).toEqual([{ type: TOKEN_TYPES.BOOLEAN, value: "Boolean" }]);
  });

  it("should produce an IDENTIFIER token", () => {
    const tokens = Tokenizer.tokenize("Actor1");
    expect(tokens).toEqual([{ type: TOKEN_TYPES.IDENTIFIER, value: "Actor1" }]);
  });

  it("should throw a syntax error", () => {
    expect(() => Tokenizer.tokenize("!")).toThrowError(SyntaxError);
  });
});
