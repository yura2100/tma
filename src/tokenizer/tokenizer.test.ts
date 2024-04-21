import { describe, expect, it } from "vitest";
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
    expect(tokens).toEqual([{ type: ";", value: ";" }]);
  });

  it("should produce a : token", () => {
    const tokens = Tokenizer.tokenize(":");
    expect(tokens).toEqual([{ type: ":", value: ":" }]);
  });

  it("should produce a , token", () => {
    const tokens = Tokenizer.tokenize(",");
    expect(tokens).toEqual([{ type: ",", value: "," }]);
  });

  it("should produce a ( token", () => {
    const tokens = Tokenizer.tokenize("(");
    expect(tokens).toEqual([{ type: "(", value: "(" }]);
  });

  it("should produce a ) token", () => {
    const tokens = Tokenizer.tokenize(")");
    expect(tokens).toEqual([{ type: ")", value: ")" }]);
  });

  it("should produce a { token", () => {
    const tokens = Tokenizer.tokenize("{");
    expect(tokens).toEqual([{ type: "{", value: "{" }]);
  });

  it("should produce a } token", () => {
    const tokens = Tokenizer.tokenize("}");
    expect(tokens).toEqual([{ type: "}", value: "}" }]);
  });

  it("should produce a * token", () => {
    const tokens = Tokenizer.tokenize("*");
    expect(tokens).toEqual([{ type: "*", value: "*" }]);
  });

  it("should produce a _ token", () => {
    const tokens = Tokenizer.tokenize("_");
    expect(tokens).toEqual([{ type: "_", value: "_" }]);
  });

  it("should produce a -> token", () => {
    const tokens = Tokenizer.tokenize("->");
    expect(tokens).toEqual([{ type: "->", value: "->" }]);
  });

  it("should produce a request token", () => {
    const tokens = Tokenizer.tokenize("request");
    expect(tokens).toEqual([{ type: "request", value: "request" }]);
  });

  it("should produce a response token", () => {
    const tokens = Tokenizer.tokenize("response");
    expect(tokens).toEqual([{ type: "response", value: "response" }]);
  });

  it("should produce an error token", () => {
    const tokens = Tokenizer.tokenize("error");
    expect(tokens).toEqual([{ type: "error", value: "error" }]);
  });

  it("should produce an actor token", () => {
    const tokens = Tokenizer.tokenize("actor");
    expect(tokens).toEqual([{ type: "actor", value: "actor" }]);
  });

  it("should produce an Int token", () => {
    const tokens = Tokenizer.tokenize("Int");
    expect(tokens).toEqual([{ type: "Int", value: "Int" }]);
  });

  it("should produce a String token", () => {
    const tokens = Tokenizer.tokenize("String");
    expect(tokens).toEqual([{ type: "String", value: "String" }]);
  });

  it("should produce a Boolean token", () => {
    const tokens = Tokenizer.tokenize("Boolean");
    expect(tokens).toEqual([{ type: "Boolean", value: "Boolean" }]);
  });

  it("should produce an IDENTIFIER token", () => {
    const tokens = Tokenizer.tokenize("Actor1");
    expect(tokens).toEqual([{ type: "IDENTIFIER", value: "Actor1" }]);
  });

  it("should throw a syntax error", () => {
    expect(() => Tokenizer.tokenize("!")).toThrowError(SyntaxError);
  });
});
