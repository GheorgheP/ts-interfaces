import { Reader } from "../src/Type";

export const read: Reader<number> = (v) => {
  if (v === "" || (typeof v !== "number" && typeof v !== "string")) {
    return undefined;
  }

  const n = Number(v);

  return isNaN(n) ? undefined : n;
};
