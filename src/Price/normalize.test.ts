import { BigInteger } from "../bigInteger";
import { createToken } from "../token";
import { createQuantity } from "../quantity";
import { getPrice, isEqual } from ".";
import toBeEqual from "./isEqual.test";

import normalize from "./normalize";

expect.extend({ toBeEqual });

const tokenA = createToken("TKNA", null, 3);
const tokenB = createToken("TKNB", null, 4);
const usd = createToken("USD", null, 2);
const eth = createToken("ETH");
const mln = createToken("MLN");
const btc = createToken("BTC", null, 8);

test("normalize atomic", () => {
  const price = getPrice(createQuantity(tokenA, 3), createQuantity(tokenB, 1));
  const result = normalize(price);
  const expected = getPrice(
    createQuantity(tokenA, 1000),
    createQuantity(tokenB, 333)
  );

  expect(result).toBeEqual(expected);
});

test("normalize decimals", () => {
  const price = getPrice(
    createQuantity(tokenA, 2000),
    createQuantity(tokenB, 10000)
  );
  const result = normalize(price);
  const expected = normalize(
    getPrice(createQuantity(tokenA, 1000), createQuantity(tokenB, 5000))
  );

  expect(result).toBeEqual(expected);
});
