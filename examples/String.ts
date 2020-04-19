import { MReader, Reader } from "../src/Type";
import { IsEqual, eq as defaultEq } from "../src/Eq";

export const read: Reader<string> = (a) => {
  switch (typeof a) {
    case "string":
      return a;
    case "number":
      return a.toString();
    default:
      return undefined;
  }
};

export const empty = "";

export const append = (a: string, b: string): string => a + b;

export const concat = (as: Array<string>): string => as.join("");

export const eq: IsEqual<string> = defaultEq;

export const mRead: MReader<string> = (v) => read(v) ?? "";
