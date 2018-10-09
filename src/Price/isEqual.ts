import isEqualQuantity from "../quantity/isEqual";
import IPrice from "./IPrice";

const isEqual = (a: IPrice, b: IPrice): boolean =>
  isEqualQuantity(a.base, b.base) && isEqualQuantity(a.quote, b.quote);

export default isEqual;
