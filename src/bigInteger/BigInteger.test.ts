import BigInteger from "./BigInteger";

test("Happy path", () => {
  const fromNumber = new BigInteger(1234);
  expect(fromNumber.toString()).toBe("1234");

  const fromString = new BigInteger("1234");
  expect(fromString.toString()).toBe("1234");

  const fromBigInteger = new BigInteger(fromString);
  expect(fromBigInteger.toString()).toBe("1234");

  const fromHex = new BigInteger("0xa");
  expect(fromHex.toString()).toBe("10");
});
