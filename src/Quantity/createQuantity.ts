import Token from "token/Token";
import Quantity from "./Quantity";

const createQuantity = (token: Token, quantity: BigInt): Quantity => ({
  ...token,
  quantity: BigInt(quantity)
});

export default createQuantity;
