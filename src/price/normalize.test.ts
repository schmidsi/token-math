import toBeEqual from "./isEqual.test";
import normalize from "./normalize";
import createToken from "../token/createToken";
import createPrice from "./createPrice";
import createQuantity from "../quantity/createQuantity";
import toFixed from "./toFixed";

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
    createQuantity(tokenB, "23142")
  );

  expect(result).toBeEqual(expected);
  expect(toFixed(result)).toBe(toFixed(price));
});

test("Very big numbers", () => {
  const price = createPrice(
    createQuantity(mln, 1.0),
    createQuantity(mln, 1111.0)
  );

  expect(toFixed(normalize(price))).toBe("1111.000000");
});
