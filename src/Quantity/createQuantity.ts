import BigInteger from "../bigInteger/BigInteger";
import IToken from "../token/IToken";
import IQuantity from "./IQuantity";

const createQuantity = (
  token: IToken,
  quantity: string | BigInteger
): IQuantity => ({
  ...token,
  quantity: typeof quantity === "string" ? new BigInteger(quantity) : quantity
});

export default createQuantity;
