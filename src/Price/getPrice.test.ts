import getPrice from "./getPrice";

const quantityA1 = {
  symbol: "TKNA",
  address: "0x0",
  decimals: 3,
  quantity: BigInt(2000)
};

const quantityB1 = {
  symbol: "TKNB",
  address: "0x1",
  decimals: 4,
  quantity: BigInt(20000)
};

test("getPrice", () => {
  expect(getPrice(quantityA1, quantityB1)).toEqual({
    base: {
      symbol: "TKNA",
      address: "0x0",
      decimals: 3,
      quantity: BigInt(1)
    },
    quote: {
      symbol: "TKNB",
      address: "0x1",
      decimals: 4,
      quantity: BigInt(10)
    }
  });
});
