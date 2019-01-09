import appendDecimals from "./appendDecimals";

test("appendDecimals", () => {
  const tknA = { symbol: "TKNA", decimals: 5 };
  const tknB = { symbol: "TKNB", decimals: 10 };
  const tknC = { symbol: "TKNC", decimals: 18 };

  expect(appendDecimals(tknA, 1).toString()).toBe("100000");
  expect(appendDecimals(tknA, 1.5).toString()).toBe("150000");
  expect(appendDecimals(tknB, 2).toString()).toBe("20000000000");
  expect(appendDecimals(tknA, "2.34").toString()).toBe("234000");
  expect(appendDecimals(tknC, "0.0022387548274030184").toString()).toBe("2238754827403018");
});
