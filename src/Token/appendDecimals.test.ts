import appendDecimals from "./appendDecimals";

test("appendDecimals", () => {
  const tknA = { symbol: "TKNA", decimals: 5 };
  const tknB = { symbol: "TKNB", decimals: 10 };

  expect(appendDecimals(tknA, 1).value).toBe("100000");
  expect(appendDecimals(tknA, 1.5).value).toBe("150000");
  expect(appendDecimals(tknB, 2).value).toBe("20000000000");
});
