import { testReader } from "../src/Type.test";
import { eq, Literal, read } from "./Literal";
import { testEq } from "../src/Eq.test";

describe("Testing Literal Reader integration", function () {
  test("If value type is number, return number", () => {
    expect(read(2)).toBe(2);
  });

  test("If value type is string number, return string", () => {
    expect(read("2")).toBe("2");
  });

  testReader(read, [1, "1", "abc", -22, 0, ""], [undefined, null, [], {}]);
});

describe("Testing Literal EQ implementation", () => {
  testEq<Literal>(eq, 1, 1, "2");
});
