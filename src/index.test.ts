import { Token } from "./index";

test("Functional API", () => {
  const eth = Token.createToken("ETH");
  expect(eth.decimals).toBe(18);
});
