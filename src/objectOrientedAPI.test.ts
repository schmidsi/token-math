import { Price, Quantity, Token } from "./index";

test("Object-Oriented API", () => {
  // By default, decimals are set to 18
  const eth = new Token("ETH");
  const btc = new Token({ symbol: "BTC", decimals: 8 });

  expect(eth.isSameToken({ symbol: "ETH", decimals: 18 })).toBe(true);
  expect(eth.isSameToken(btc)).toBe(false);

  const quantityA1 = new Quantity(eth, eth.appendDecimals(1));
  const quantityA2 = new Quantity(eth, eth.appendDecimals(2.5));
  const quantityA3 = new Quantity(eth, eth.appendDecimals(3.5));

  expect(quantityA1.add(quantityA2).isEqual(quantityA3)).toBe(true);
});
