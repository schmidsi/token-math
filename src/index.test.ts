import { createToken, toBI, BigInteger, isEqual } from "./index";

test("Functional API", () => {
  const eth = createToken("ETH");
  expect(eth.decimals).toBe(18);

  const bi = toBI("0x123");
  expect(bi.toString()).toBe("291");

  const throughConstructor = new BigInteger("0x123");
  expect(throughConstructor.toString()).toBe("291");

  const eth2 = createToken("ETH");
  expect(isEqual(eth, eth2)).toBe(true);
});
