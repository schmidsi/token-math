import { Token, BigInteger } from "./index";

test("Functional API", () => {
  const eth = Token.createToken("ETH");
  expect(eth.decimals).toBe(18);

  const bi = BigInteger.toBI("0x123");
  expect(bi.toString()).toBe("291");

  const throughConstructor = new BigInteger("0x123");
  expect(bi.toString()).toBe("291");
});
