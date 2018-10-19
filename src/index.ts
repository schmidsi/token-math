// We only export BigInteger from bigInteger here and omit the helper functions
// to avoid confusion.

import * as BigIntegerExport from "./bigInteger/index";
import { default as BigIntegerClass } from "./bigInteger/BigInteger";
export const BigInteger = Object.assign(BigIntegerClass, BigIntegerExport);

import * as PriceExport from "./price/index";
export { default as PriceInterface } from "./price/PriceInterface";
export const Price = PriceExport;

import * as QuantityExport from "./quantity/index";
export { default as QuantityInterface } from "./quantity/QuantityInterface";
export const Quantity = QuantityExport;

import * as TokenExport from "./token/index";
export { default as TokenInterface } from "./token/TokenInterface";
export const Token = TokenExport;

export default {
  BigInteger,
  Price,
  Quantity,
  Token
};
