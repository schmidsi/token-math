import appendDecimals from "./appendDecimals";

test("appendDecimals", () => {
  const tknA = { symbol: "TKNA", decimals: 5 };
  const tknB = { symbol: "TKNB", decimals: 10 };

  expect(appendDecimals(tknA, 1)).toBe(BigInt(100000));
  expect(appendDecimals(tknA, 1.5)).toBe(BigInt(150000));
  expect(appendDecimals(tknB, 2)).toBe(BigInt(20000000000));
});
