import { token } from "./index";

test("Functional API", () => {
  const eth = token.createToken("ETH");
  expect(eth.decimals).toBe(18);
});
