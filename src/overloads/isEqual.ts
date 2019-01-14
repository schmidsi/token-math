import ConvertableBigInteger from "../bigInteger/ConvertableBigInteger";
import isConvertableBigInteger from "../bigInteger/isConvertableBigInteger";
import { default as isEqualBigInteger } from "../bigInteger/isEqual";

import QuantityInterface from "../quantity/QuantityInterface";
import isQuantity from "../quantity/isQuantity";
import { default as isEqualQuantity } from "../quantity/isEqual";

import TokenInterface from "../token/TokenInterface";
import isToken from "../token/isToken";
import { default as isEqualToken } from "../token/isEqual";

import PriceInterface from "../price/PriceInterface";
import isPrice from "../price/isPrice";
import { default as isEqualPrice } from "../price/isEqual";

export type IsEqual = {
  (a: ConvertableBigInteger, b: ConvertableBigInteger): boolean;
  (a: PriceInterface, b: PriceInterface): boolean;
  (a: QuantityInterface, b: QuantityInterface): boolean;
  (a: TokenInterface, b: TokenInterface): boolean;
};

const isEqual: IsEqual = (a, b) => {
  if (isConvertableBigInteger(a) && isConvertableBigInteger(b)) {
    return isEqualBigInteger(a, b);
  }

  if (isQuantity(a) && isQuantity(b)) {
    return isEqualQuantity(a, b);
  }

  if (isToken(a) && isToken(b)) {
    return isEqualToken(a, b);
  }

  if (isPrice(a) && isPrice(b)) {
    return isEqualPrice(a, b);
  }

  return false;
};

export default isEqual;
