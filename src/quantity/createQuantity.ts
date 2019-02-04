import BigInteger from "../bigInteger/BigInteger";
import createToken from "../token/createToken";
import appendDecimals from "../token/appendDecimals";
import TokenInterface from "../token/TokenInterface";
import QuantityInterface from "./QuantityInterface";
import toBI from "../bigInteger/toBI";

const toBigInteger = (
  token: TokenInterface,
  value: number | string | BigInteger
): BigInteger => {
  if (typeof value === "string" && value.replace(",", ".").includes("."))
    return appendDecimals(token, value);
  if (typeof value === "string") return new BigInteger(value);
  if (typeof value === "number") return appendDecimals(token, value.toString());
  return toBI(value);
};

/**
 * Shortcut to create a quantity. If second argument is a number,
 * the according decimals are appended automatically. So shortest call:
 *
 * ```typescript
 * let someMelons = createQuantity('MLN', 2.34);
 *
 * // results in:
 * someMelons = {
 *    token: {
 *      symbol: 'MLN',
 *      decimals: 18
 *    }
 *    quantity: new BigInteger('2340000000000000000');
 * }
 * ```
 *
 * This only works if the last argument is a number. Otherwise:
 *
 * ```typescript
 * let someMelons = createQuantity('MLN', "234");
 *
 * // results in
 * someMelons = {
 *    token: {
 *      symbol: 'MLN',
 *      decimals: 18
 *    }
 *    quantity: new BigInteger('234');
 * }
 */
const createQuantity = (
  tokenOrSymbol: TokenInterface | string,
  quantityArg: number | string | BigInteger
): QuantityInterface => {
  const token =
    typeof tokenOrSymbol === "string"
      ? createToken(tokenOrSymbol)
      : tokenOrSymbol;
  const quantity = toBigInteger(token, quantityArg);

  return {
    token,
    quantity
  };
};

export default createQuantity;
