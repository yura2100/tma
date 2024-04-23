import { describe, expect, it } from "vitest";
import { TOKEN_TYPES } from "./token-types.js";
import { Tokenizer } from "./tokenizer.js";

describe("Tokenizer", () => {
  it("should not produce any tokens for an empty program", () => {
    const tokenizer = new Tokenizer("");
    const tokens = Array.from(tokenizer);
    expect(tokens).toEqual([]);
  });

  it("should not produce tokens for whitespaces", () => {
    const tokenizer = new Tokenizer("   ");
    const tokens = Array.from(tokenizer);
    expect(tokens).toEqual([]);
  });

  it("should not produce any tokens for tabs", () => {
    const tokenizer = new Tokenizer("\t\t\t");
    const tokens = Array.from(tokenizer);
    expect(tokens).toEqual([]);
  });

  it("should not produce any tokens for newlines", () => {
    const tokenizer = new Tokenizer("\n\n\n");
    const tokens = Array.from(tokenizer);
    expect(tokens).toEqual([]);
  });

  it("should not produce any tokens for comments", () => {
    const tokenizer = new Tokenizer("# This is comment");
    const tokens = Array.from(tokenizer);
    expect(tokens).toEqual([]);
  });

  it("should produce a ; token", () => {
    const tokenizer = new Tokenizer(";");
    const tokens = Array.from(tokenizer);
    expect(tokens).toEqual([{ type: TOKEN_TYPES.SEMICOLON, value: ";" }]);
  });

  it("should produce a : token", () => {
    const tokenizer = new Tokenizer(":");
    const tokens = Array.from(tokenizer);
    expect(tokens).toEqual([{ type: TOKEN_TYPES.COLON, value: ":" }]);
  });

  it("should produce a , token", () => {
    const tokenizer = new Tokenizer(",");
    const tokens = Array.from(tokenizer);
    expect(tokens).toEqual([{ type: TOKEN_TYPES.COMMA, value: "," }]);
  });

  it("should produce a ( token", () => {
    const tokenizer = new Tokenizer("(");
    const tokens = Array.from(tokenizer);
    expect(tokens).toEqual([
      { type: TOKEN_TYPES.LEFT_PARENTHESES, value: "(" },
    ]);
  });

  it("should produce a ) token", () => {
    const tokenizer = new Tokenizer(")");
    const tokens = Array.from(tokenizer);
    expect(tokens).toEqual([
      { type: TOKEN_TYPES.RIGHT_PARENTHESES, value: ")" },
    ]);
  });

  it("should produce a { token", () => {
    const tokenizer = new Tokenizer("{");
    const tokens = Array.from(tokenizer);
    expect(tokens).toEqual([
      { type: TOKEN_TYPES.LEFT_CURLY_BRACE, value: "{" },
    ]);
  });

  it("should produce a } token", () => {
    const tokenizer = new Tokenizer("}");
    const tokens = Array.from(tokenizer);
    expect(tokens).toEqual([
      { type: TOKEN_TYPES.RIGHT_CURLY_BRACE, value: "}" },
    ]);
  });

  it("should produce a * token", () => {
    const tokenizer = new Tokenizer("*");
    const tokens = Array.from(tokenizer);
    expect(tokens).toEqual([{ type: TOKEN_TYPES.ASTERISK, value: "*" }]);
  });

  it("should produce a _ token", () => {
    const tokenizer = new Tokenizer("_");
    const tokens = Array.from(tokenizer);
    expect(tokens).toEqual([{ type: TOKEN_TYPES.UNDERSCORE, value: "_" }]);
  });

  it("should produce a -> token", () => {
    const tokenizer = new Tokenizer("->");
    const tokens = Array.from(tokenizer);
    expect(tokens).toEqual([{ type: TOKEN_TYPES.ARROW, value: "->" }]);
  });

  it("should produce a request token", () => {
    const tokenizer = new Tokenizer("request");
    const tokens = Array.from(tokenizer);
    expect(tokens).toEqual([{ type: TOKEN_TYPES.REQUEST, value: "request" }]);
  });

  it("should produce a response token", () => {
    const tokenizer = new Tokenizer("response");
    const tokens = Array.from(tokenizer);
    expect(tokens).toEqual([{ type: TOKEN_TYPES.RESPONSE, value: "response" }]);
  });

  it("should produce an error token", () => {
    const tokenizer = new Tokenizer("error");
    const tokens = Array.from(tokenizer);
    expect(tokens).toEqual([{ type: TOKEN_TYPES.ERROR, value: "error" }]);
  });

  it("should produce an actor token", () => {
    const tokenizer = new Tokenizer("actor");
    const tokens = Array.from(tokenizer);
    expect(tokens).toEqual([{ type: TOKEN_TYPES.ACTOR, value: "actor" }]);
  });

  it("should produce an Int token", () => {
    const tokenizer = new Tokenizer("Int");
    const tokens = Array.from(tokenizer);
    expect(tokens).toEqual([{ type: TOKEN_TYPES.INT, value: "Int" }]);
  });

  it("should produce a String token", () => {
    const tokenizer = new Tokenizer("String");
    const tokens = Array.from(tokenizer);
    expect(tokens).toEqual([{ type: TOKEN_TYPES.STRING, value: "String" }]);
  });

  it("should produce a Boolean token", () => {
    const tokenizer = new Tokenizer("Boolean");
    const tokens = Array.from(tokenizer);
    expect(tokens).toEqual([{ type: TOKEN_TYPES.BOOLEAN, value: "Boolean" }]);
  });

  it("should produce an IDENTIFIER token", () => {
    const tokenizer = new Tokenizer("Actor1");
    const tokens = Array.from(tokenizer);
    expect(tokens).toEqual([{ type: TOKEN_TYPES.IDENTIFIER, value: "Actor1" }]);
  });

  it("should throw a syntax error", () => {
    const tokenizer = new Tokenizer("!");
    expect(() => Array.from(tokenizer)).toThrowError(SyntaxError);
  });
});
