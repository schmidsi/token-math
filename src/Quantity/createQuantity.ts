import BigInteger from "../bigInteger/BigInteger";
import Token from "../token/Token";
import Quantity from "./Quantity";

const createQuantity = (
  token: Token,
  quantity: string | BigInteger
): Quantity => ({
  ...token,
  quantity: typeof quantity === "string" ? new BigInteger(quantity) : quantity
});

export default createQuantity;
