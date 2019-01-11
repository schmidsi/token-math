import { token, bigInteger, isEqual } from "./index";

test("Functional API", () => {
  const eth = token.createToken("ETH");
  expect(eth.decimals).toBe(18);

  const value = bigInteger.toBI("0x123");
  expect(value.toString()).toBe("291");

  const throughConstructor = new bigInteger.BigInteger("0x123");
  expect(throughConstructor.toString()).toBe("291");

  const eth2 = token.createToken("ETH");
  expect(isEqual(eth, eth2)).toBe(true);
});
