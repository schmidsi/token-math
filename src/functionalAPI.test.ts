import { createToken } from "./Token/index";

test("Functional API", () => {
  const eth = createToken("ETH");
  expect(eth.decimals).toBe(18);
});
