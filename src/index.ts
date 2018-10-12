// We only export BigInteger from bigInteger here and omit the helper functions
// to avoid confusion.

import * as BigIntegerExport from "./bigInteger/index";
import { default as BigIntegerClass } from "./bigInteger/BigInteger";
export const BigInteger = Object.assign(BigIntegerClass, BigIntegerExport);

import * as PriceExport from "./price/index";
export { default as IPrice } from "./price/IPrice";
export const Price = PriceExport;

import * as QuantityExport from "./quantity/index";
export { default as IQuantity } from "./quantity/IQuantity";
export const Quantity = QuantityExport;

import * as TokenExport from "./token/index";
export { default as IToken } from "./token/IToken";
export const Token = TokenExport;

export default {
  BigInteger,
  Price,
  Quantity,
  Token
};
