import BigInteger from "../bigInteger/BigInteger";
import createToken from "../token/createToken";
import TokenInterface from "../token/TokenInterface";
import QuantityInterface from "./QuantityInterface";

const createQuantity = (
  tokenOrSymbol: TokenInterface | string,
  bigInteger: number | string | BigInteger
): QuantityInterface => {
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
