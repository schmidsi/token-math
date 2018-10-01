import valueIn from "./valueIn";

test("valueIn", () => {
  const ethInBtc = {
    base: {
      symbol: "ETH",
      address: "0x234",
      decimals: 18,
      quantity: BigInt(1000000000000000000)
    },
    quote: {
      symbol: "BTC",
      address: "0x123",
      decimals: 8,
      quantity: BigInt(4380219)
    }
  };

  expect(
    valueIn(ethInBtc, {
      symbol: "ETH",
      address: "0x234",
      decimals: 18,
      quantity: BigInt(2000000000000000000)
    })
  ).toEqual({
    symbol: "BTC",
    address: "0x123",
    decimals: 8,
    quantity: BigInt(8760438)
  });

  expect(
    valueIn(ethInBtc, {
      symbol: "BTC",
      address: "0x123",
      decimals: 8,
      quantity: BigInt(8760438)
    })
  ).toEqual({
    symbol: "ETH",
    address: "0x234",
    decimals: 18,
    quantity: BigInt(2000000000000000000)
  });
});
