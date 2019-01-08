import appendDecimals from "./appendDecimals";

test("appendDecimals", () => {
  const tknA = { symbol: "TKNA", decimals: 5 };
  const tknB = { symbol: "TKNB", decimals: 10 };

  expect(appendDecimals(tknA, 1).toString()).toBe("100000");
  expect(appendDecimals(tknA, 1.5).toString()).toBe("150000");
  expect(appendDecimals(tknB, 2).toString()).toBe("20000000000");
  expect(appendDecimals(tknA, "2.34").toString()).toBe("234000");
});
