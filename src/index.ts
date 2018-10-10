// We only export BigInteger from bigInteger here and omit the helper functions
// to avoid confusion.
import { default as BigIntegerExport } from "./bigInteger/BigInteger";
export const BigInteger = BigIntegerExport;

import * as PriceExport from "./price";
export { default as IPrice } from "./price/IPrice";
export const Price = PriceExport;

import * as QuantityExport from "./quantity";
export { default as IQuantity } from "./quantity/IQuantity";
export const Quantity = QuantityExport;

import * as TokenExport from "./token";
export { default as IToken } from "./token/IToken";
export const Token = TokenExport;

export default {
  BigInteger,
  Price,
  Quantity,
  Token
};
