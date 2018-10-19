import isEqualQuantity from "../quantity/isEqual";
import PriceInterface from "./PriceInterface";

const isEqual = (a: PriceInterface, b: PriceInterface): boolean =>
  isEqualQuantity(a.base, b.base) && isEqualQuantity(a.quote, b.quote);

export default isEqual;
