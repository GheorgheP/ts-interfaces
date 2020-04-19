import { read } from "./number";
import { testReader } from "../src/Type.test";

describe("Testing NumberSpec Reader implementation", function () {
  testReader(
    read,
    [-1, 0, 1, -1.1, 0.1, 1.1, "-1", "0", "1", "-1.1", "0.1", "1.1"],
    [undefined, null, "", "a", "1a", "a1", {}, []],
  );
});
