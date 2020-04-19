import { read, eq, empty, concat, append } from "./String";
import { testReader } from "../src/Type.test";
import { testMonoid } from "../src/Monoid.test";
import { testEq } from "../src/Eq.test";

describe("Testing String Reader implementation", function () {
  testReader(read, ["", "0", "test", 0, 1, 2, 3], [{}, () => ({}), [], undefined, null]);
});

describe("Testing String Monoid implementation", function () {
  testMonoid({ empty, concat, append }, ["", "0", "a", "test", "1234"]);
});

describe("Testing String Eq implementation", function () {
  testEq(eq, "test", "test", "test2");
});
