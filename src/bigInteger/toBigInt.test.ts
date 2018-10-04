import toBigInt from "./toBigInt";

test("toBigInt", () => {
  expect(toBigInt(10)).toBe(BigInt(10));
  expect(toBigInt("10")).toBe(BigInt("10"));
  expect(
    toBigInt("109234859234590872039845709823475098723489057").toString()
  ).toBe("109234859234590872039845709823475098723489057");
  expect(
    Number("109234859234590872039845709823475098723489057").toString()
  ).not.toBe("109234859234590872039845709823475098723489057");
  expect(toBigInt("0x123")).toBe(BigInt(291));
});
