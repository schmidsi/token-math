import { createToken } from "../token";
import { createQuantity } from "../quantity";
import { createPrice, toFixed } from "./";
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
  const price = createPrice(
    createQuantity(tokenA, "3"),
    createQuantity(tokenB, "1")
  );
  const result = normalize(price);
  const expected = createPrice(
    createQuantity(tokenA, "1000"),
    createQuantity(tokenB, "333")
  );

  expect(result).toBeEqual(expected);
});

test("normalize decimals", () => {
  const price = createPrice(
    createQuantity(tokenA, "2000"),
    createQuantity(tokenB, "10000")
  );
  const result = normalize(price);

  const expected = normalize(
    createPrice(createQuantity(tokenA, "1000"), createQuantity(tokenB, "5000"))
  );

  expect(result).toBeEqual(expected);
});

test("ETH/USD", () => {
  const price = createPrice(
    createQuantity(eth, "2000000000000000000"),
    createQuantity(usd, "45724")
  );
  const result = normalize(price);
  const expected = createPrice(
    createQuantity(eth, "1000000000000000000"),
    createQuantity(usd, "22862")
  );

  expect(result).toBeEqual(expected);
});

test("Strange numbers", () => {
  const price = createPrice(
    createQuantity(tokenA, "4321"),
    createQuantity(tokenB, "100000")
  );

  const result = normalize(price);

  const expected = createPrice(
    createQuantity(tokenA, "1000"),
    createQuantity(tokenB, "23143")
  );

  expect(result).toBeEqual(expected);
  expect(toFixed(result)).toBe(toFixed(price));
});
