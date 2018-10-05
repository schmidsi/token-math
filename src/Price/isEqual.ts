import isEqualQuantity from "../quantity/isEqual";
import Price from "../price/Price";

const isEqual = (a: Price, b: Price): boolean =>
  isEqualQuantity(a.base, b.base) && isEqualQuantity(a.quote, b.quote);

export default isEqual;
