import BigInteger from "./BigInteger";

test("Happy path", () => {
  const fromNumber = new BigInteger(1234);
  expect(fromNumber.value).toBe("1234");

  const fromString = new BigInteger("1234");
  expect(fromString.value).toBe("1234");

  const fromBigInteger = new BigInteger(fromString);
  expect(fromBigInteger.value).toBe("1234");

  const fromHex = new BigInteger("0xa");
  expect(fromHex.value).toBe("10");

  const fromBigInt = new BigInteger(BigInt(123));
  expect(fromBigInt.value).toBe("123");
});
