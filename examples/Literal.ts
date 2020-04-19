import { Reader } from "../src/Type";
import { IsEqual } from "../src/Eq";
import * as Number from "./Number";
import * as Str from "./String";

/**
 * Literal is a value type that allows both string or numeric values
 */

export type Literal = string | number;

export const read: Reader<Literal> = (v) => {
  if (typeof v === "number") {
    return Number.read(v);
  }

  return Str.read(v);
};

export const eq: IsEqual<Literal> = (a, b) => a === b;
