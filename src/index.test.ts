import {
  add,
  subtract,
  toBigInt,
  createQuantity,
  getGreatestCommonDivisor,
  getPrice,
  valueIn,
  TokenInterface,
  toFixed
} from "./index";

const tokenA: TokenInterface = {
  symbol: "TKNA",
  address: "0x0",
  decimals: 3
};

const tokenB: TokenInterface = {
  symbol: "TKNB",
  address: "0x1",
  decimals: 4
};

const bitcoin: TokenInterface = {
  symbol: "BTC",
  address: "0x123",
  decimals: 8
};

const ether: TokenInterface = {
  symbol: "ETH",
  address: "0x234",
  decimals: 18
};

const usd: TokenInterface = {
  symbol: "USD",
  decimals: 2
};

const quantityA1 = createQuantity(tokenA, toBigInt(2000));
const quantityA2 = createQuantity(tokenA, toBigInt(3000));
const quantityB1 = createQuantity(tokenB, toBigInt(20000));

test("toBigInt", () => {
  expect(toBigInt(10)).toBe(BigInt(10));
  expect(toBigInt("10")).toBe(BigInt("10"));
  expect(toBigInt("109234859234590872039845709823475098723489057")).not.toBe(
    BigInt(10)
  );
  expect(toBigInt("0x123")).toBe(BigInt(291));
});

test("add", () => {
  expect(add(quantityA1, quantityA2)).toEqual(
    createQuantity(tokenA, toBigInt(5000))
  );

  expect(() => add(quantityA1, quantityB1)).toThrow();
});

test("subtract", () => {
  expect(subtract(quantityA2, quantityA1)).toEqual(
    createQuantity(tokenA, toBigInt(1000))
  );

  expect(() => subtract(quantityA1, quantityB1)).toThrow();
});

test("getGreatestCommonDivisor", () => {
  expect(getGreatestCommonDivisor(toBigInt(6), toBigInt(3))).toBe(toBigInt(3));
  expect(getGreatestCommonDivisor(toBigInt(5), toBigInt(1))).toBe(toBigInt(1));
  expect(getGreatestCommonDivisor(toBigInt(5), toBigInt(0))).toBe(toBigInt(5));
  expect(getGreatestCommonDivisor(toBigInt(25), toBigInt(5))).toBe(toBigInt(5));
  expect(getGreatestCommonDivisor(toBigInt(5), toBigInt(25))).toBe(toBigInt(5));
});

test("getPrice", () => {
  expect(getPrice(quantityA1, quantityB1)).toEqual({
    base: createQuantity(tokenA, toBigInt(1)),
    quote: createQuantity(tokenB, toBigInt(10))
  });
});

test("toFixed", () => {
  const price = getPrice(quantityA1, quantityB1);
  expect(toFixed(price)).toBe("1.000000");

  const ethInBtc = getPrice(
    createQuantity(ether, toBigInt("1000000000000000000")),
    createQuantity(bitcoin, toBigInt("4380219"))
  );

  expect(toFixed(ethInBtc)).toBe("0.043802");

  const btcInUsd = getPrice(
    createQuantity(bitcoin, toBigInt("100000000")),
    createQuantity(usd, toBigInt("645861"))
  );

  expect(toFixed(btcInUsd)).toBe("6458.610000");
});

test("valueIn", () => {
  const ethInBtc = getPrice(
    createQuantity(ether, toBigInt("1000000000000000000")),
    createQuantity(bitcoin, toBigInt("4380219"))
  );

  expect(
    valueIn(ethInBtc, createQuantity(ether, toBigInt("2000000000000000000")))
  ).toEqual(createQuantity(bitcoin, toBigInt("8760438")));

  expect(
    valueIn(ethInBtc, createQuantity(bitcoin, toBigInt("8760438")))
  ).toEqual(createQuantity(ether, toBigInt("2000000000000000000")));
});
