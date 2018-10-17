import BigInteger from "../bigInteger/BigInteger";
import createToken from "../token/createToken";
import IToken from "../token/IToken";
import IQuantity from "./IQuantity";

const createQuantity = (
  tokenOrSymbol: IToken | string,
  bigInteger: number | string | BigInteger
): IQuantity => {
  const token =
    typeof tokenOrSymbol === "string"
      ? createToken(tokenOrSymbol)
      : tokenOrSymbol;
  const quantity =
    bigInteger instanceof BigInteger ? bigInteger : new BigInteger(bigInteger);

  return {
    ...token,
    quantity
  };
};

export default createQuantity;
