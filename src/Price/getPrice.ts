import IQuantity from "../quantity/IQuantity";

import IPrice from "./IPrice";
import cancelDown from "./cancelDown";

/**
 * Gets the price of two quantites. Cancels down by default
 */
const getPrice = (
  base: IQuantity,
  quote: IQuantity,
  preventCancelDown: boolean = false
): IPrice => {
  const price = { base, quote };
  const result = preventCancelDown ? price : cancelDown(price);

  return result;
};

export default getPrice;
